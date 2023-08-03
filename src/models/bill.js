let { ExcuteQuery } = require("../database/database");
let generateRandomString = () => {
  let characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let result = "";

  for (let i = 0; i < 10; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length);
    result += characters[randomIndex];
  }
  return result;
};
class Bill {
  constructor({ id, date, status, discount, note, customer }) {
    this.id = id ? id.trim() : generateRandomString();
    if (typeof date === "string") {
      date = new Date(date);
    }
    this.date = date
      ? date.toLocaleString("en-US", {
          day: "numeric",
          month: "numeric",
          year: "numeric",
        })
      : "";
    this.status = status ? status.trim() : "unpaid";
    this.discount = discount ? discount : 0;
    this.note = note ? note.trim() : "";
    this.customer = customer ? customer : "";
  }
  async save() {
    const date = this.date ? `'${this.date}'` : "@date";
    const query = `
    DECLARE @date DATETIME
    ${!this.date ? "set @date = GETDATE()" : ""}
    EXEC UpdateOrInsertBill @id = '${this.id}', @date = ${date}, @status = '${
      this.status
    }', @discount = ${this.discount}, @note = '${this.note}' , @customer = '${
      this.customer
    }'
    `;
    await ExcuteQuery(query);
  }
  async delete() {
    const query = `delete Bill where id = '${this.id}'`;
    await ExcuteQuery(query);
  }
  async getTotalAmount() {
    try {
      let query = `select sum(price*quantity) from BillDetails where idBill = ${this.id}`;
      let totalAmount = await ExcuteQuery(query);
      return totalAmount;
    } catch (error) {
      return 0;
    }
  }
  static async findBillForUser(username) {
    let query = `select * from Bill where customer = '${username}' and status = 'unpaid'`;
    let billJson = await ExcuteQuery(query);
    if (!billJson[0]) {
      return null;
    }
    return new Bill(billJson[0]);
  }
  static async findOne(id) {
    try {
      let billJson = await ExcuteQuery(`select * from Bill where id = '${id}'`);
      return new Bill(billJson[0]);
    } catch (e) {
      return null;
    }
  }
  static async findAll({ status }) {
    try {
      let terms = status ? `where status = '${status}'` : "";
      let billsJson = await ExcuteQuery(`select * from Bill ${terms}`);
      let bills = billsJson.map((billJson) => {
        return new Bill(billJson);
      });

      return bills;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async findBillDaybetwenDay({ firstDay, seccondDay }) {
    try {
      let query = `select * from Bill WHERE CAST(Bill.date AS DATE) >= '${firstDay}' AND CAST(Bill.date AS DATE) <= '${seccondDay}';`;
      if (firstDay === seccondDay) {
        query = `select * from Bill WHERE CAST(Bill.date AS DATE) = '${firstDay}';`;
      }
      let billJson = await ExcuteQuery(query);
      let bills = billJson.map((billJson) => {
        return new Bill(billJson);
      });
      return bills;
    } catch (error) {
      return null;
    }
  }
  static async getRevenueForDaybetwenDay({ firstDay, seccondDay }) {
    try {
      let query = `select sum(price*quantity) as totalAmount from BillingDetails 
      inner join Bill on Bill.id = BillingDetails.idBill 
       WHERE CAST(Bill.date AS DATE) >= '${firstDay}' AND CAST(Bill.date AS DATE) <= '${seccondDay}'`;
      if (firstDay === seccondDay) {
        query = `select sum(price*quantity) as totalAmount from BillingDetails 
        inner join Bill on Bill.id = BillingDetails.idBill
         where CAST(Bill.date AS DATE) = '${firstDay}'`;
      }
      let totalAmount = await ExcuteQuery(query);
      return totalAmount;
    } catch (error) {
      return 0;
    }
  }
}
module.exports = {
  Bill,
};

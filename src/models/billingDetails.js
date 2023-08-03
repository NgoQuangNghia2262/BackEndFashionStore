const { ExcuteQuery } = require("../database/database");

class BillingDetails {
  constructor({
    id,
    idBill,
    sizeProduct,
    price,
    nameProduct,
    colorProduct,
    quantity,
  }) {
    this.id = id ? id : 0;
    this.idBill = idBill.trim();
    this.sizeProduct = sizeProduct.trim();
    this.price = price ? price : 0;
    this.nameProduct = nameProduct.trim();
    this.colorProduct = colorProduct.trim();
    this.quantity = quantity ? quantity : 1;
  }
  async save() {
    const query = `
    EXEC UpsertBillingDetails
    @id = ${this.id},
    @idBill = '${this.idBill}',
    @sizeProduct = '${this.sizeProduct}',
    @price = ${this.price},
    @nameProduct = N'${this.nameProduct}', 
    @colorProduct = N'${this.colorProduct}',
    @quantity = ${this.quantity};
    `;
    await ExcuteQuery(query);
  }
  async delete() {
    const query = `delete BillingDetails where id = ${this.id}`;
    await ExcuteQuery(query);
  }
  static async findOne(id) {
    try {
      const query = `select * from BillingDetails WHERE id = ${id}`;
      const billingDetailsJson = await ExcuteQuery(query);
      return new BillingDetails(billingDetailsJson[0]);
    } catch (e) {
      return null;
    }
  }
  static async findAll({ idBill }) {
    try {
      const terms = idBill ? `where idBill = '${idBill}'` : "";
      const billingDetailsJson = await ExcuteQuery(
        `select * from BillingDetails ${terms}`
      );
      const billingDetailss = billingDetailsJson.map((billingDetail) => {
        return new BillingDetails(billingDetail);
      });
      return billingDetailss;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async getCartForCustomer(username) {
    const query = `
    select BillingDetails.* from BillingDetails
    inner join Bill on idBill = Bill.id
    where customer = '${username}' and status = 'unpaid' 
    `;
    const billingDetailsJson = await ExcuteQuery(query);
    const billingDetailss = billingDetailsJson.map((billingDetail) => {
      return new BillingDetails(billingDetail);
    });
    return billingDetailss;
  }
}

module.exports = { BillingDetails };

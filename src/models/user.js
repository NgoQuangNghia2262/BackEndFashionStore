const { ExcuteQuery } = require("../database/database.js");
const { BillingDetails } = require("./billingDetails.js");
class User {
  constructor({ username, password, permissions }) {
    (this.username = username.trim()),
      (this.password = password.trim()),
      (this.permissions = permissions.trim());
  }
  static async findOne(username) {
    try {
      if (!username) {
        throw e;
      }
      const userJson = await ExcuteQuery(
        `select * from Account where username = '${username}'`
      );
      return new User(userJson[0]);
    } catch (e) {
      return null;
    }
  }
  static async findAll() {
    try {
      const usersJson = await ExcuteQuery(`select * from Account`);
      const users = usersJson.map((userJson) => {
        return new User(userJson);
      });
      return users;
    } catch (e) {
      return null;
    }
  }
  async getCart() {
    const billingDetails = await BillingDetails.getCartForCustomer(
      this.username
    );
    return billingDetails;
  }
  async delete() {
    await ExcuteQuery(`delete Account where username = '${this.username}'`);
  }
  async save() {
    //Kiểm tra acc có trong DB chưa nếu có rồi thì sửa lại bản ghi , chưa có thì thêm bản ghi mới
    const query = `
      if EXISTS (select * from Account where username = '${this.username}')
      begin
        update Account set password = '${this.password}' , permissions = N'${this.permissions}' where username = '${this.username}'
      end
      else
      begin
        insert into Account values('${this.username}','${this.password}',N'${this.permissions}')
      end
    `;
    await ExcuteQuery(query);
  }
}
module.exports = {
  User,
};

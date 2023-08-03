const { ExcuteQuery } = require("../database/database");
class Product {
  constructor({
    img,
    name,
    category,
    color,
    size,
    price,
    discount,
    describe,
    inventory,
  }) {
    this.img = img ? img.trim() : "";
    this.name = name ? name.trim() : "";
    this.category = category ? category.trim() : "";
    this.color = color ? color.trim() : "";
    this.size = size ? size.trim() : "";
    this.price = price ? price : 0;
    this.discount = discount ? discount : 0;
    this.describe = describe ? describe.trim() : "";
    this.inventory = inventory ? inventory : 0;
  }
  async save() {
    const query = `
    EXEC UpsertProduct 
      @img = '${this.img}',
      @name = '${this.name}',
      @category = N'${this.category}',
      @color = N'${this.color}',
      @size = '${this.size}',
      @price = ${this.price},
      @discount = ${this.discount},
      @describe = N'${this.describe}',
      @inventory = ${this.inventory};

    `;
    await ExcuteQuery(query);
  }
  async delete() {
    const query = `delete product where name = N'${this.name}' and color = N'${this.color}' and size = '${this.size}'`;
    await ExcuteQuery(query);
  }
  static async findOne(name, color, size) {
    try {
      const query = `select * from Product where name = N'${name}' and color = N'${color}' and size = '${size}'`;
      const productJson = await ExcuteQuery(query);
      return new Product(productJson[0]);
    } catch {
      return null;
    }
  }
  static async findAll() {
    try {
      const query = `select * from Product`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch {
      return null;
    }
  }
  static async findProductByWord(wrod) {
    try {
      const query = `
      select img , name , category , price from Product where name like N'%${wrod}%'
      group by img , name , category , price`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async findProductByName(name) {
    try {
      const query = `select * from Product where name = N'${name}'`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async findProductBySize(size) {
    try {
      const query = `select * from Product where size = N'${size}'`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch {
      return null;
    }
  }
  static async findProductByPrice(price) {
    try {
      const query = `select * from Product where price = N'${price}'`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch {
      return null;
    }
  }
  static async findProductByCategory(category) {
    try {
      const query = `select img , name , category , price from Product where category = N'${category}'
      group by img , name , category , price`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async findProductGroupbyName() {
    try {
      const query = `select img , name , category , price from Product
      group by img , name , category , price`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch (e) {
      console.log(e);
      return null;
    }
  }
  static async findCategory() {
    try {
      const query = `select category from Product
      group by category`;
      const productsJson = await ExcuteQuery(query);
      const products = productsJson.map((product) => {
        return new Product(product);
      });
      return products;
    } catch (error) {
      return null;
    }
  }
}

module.exports = {
  Product,
};

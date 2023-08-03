const { Product } = require("../models/product.js");

const productController = {
  findOne: async (req, res) => {
    try {
      const product = await Product.findOne(
        req.query.name,
        req.query.color,
        req.query.size
      );
      res.status(200).json({ status: 200, data: product });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const products = await Product.findAll();
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductByName: async (req, res) => {
    try {
      const products = await Product.findProductByName(req.query.name);
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductByWord: async (req, res) => {
    try {
      const products = await Product.findProductByWord(req.query.word);
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductBySize: async (req, res) => {
    try {
      const products = await Product.findProductBysize(req.query.size);
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductByColor: async (req, res) => {
    try {
      const products = await Product.findProductBycolor(req.query.color);
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductGroupbyName: async (req, res) => {
    try {
      const products = await Product.findProductGroupbyName();
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findProductByCategory: async (req, res) => {
    try {
      const products = await Product.findProductByCategory(req.query.category);
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findCategory: async (req, res) => {
    try {
      const products = await Product.findCategory();
      res.status(200).json({ status: 200, data: products });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  create: async (req, res) => {
    try {
      const product = new Product(req.body);
      await product.save();
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  delete: async (req, res) => {},
  update: async (req, res) => {},
};
module.exports = {
  productController,
};

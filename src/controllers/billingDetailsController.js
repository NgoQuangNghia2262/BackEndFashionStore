const { Bill } = require("../models/bill.js");
const { BillingDetails } = require("../models/billingDetails");
const { isLogined } = require("../middleware/authentication.js");
const { verifyToken } = require("../middleware/JWTActions.js");
const billDetailsController = {
  findOne: async (req, res) => {
    try {
      const billingDetail = await BillingDetails.findOne(req.params.id);
      res.status(200).json({ data: billingDetail, status: 200 });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const billingDetails = await BillingDetails.findAll({});
      res.status(200).json({ data: billingDetails, status: 200 });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findBillingDetailsByIdBill: async (req, res) => {
    try {
      const billingDetails = await BillingDetails.findAll({
        idBill: req.query.idbill,
      });
      res.status(200).json({ data: billingDetails, status: 200 });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  create: async (req, res) => {
    try {
      let idBill = req.body.idBill;
      if (!idBill) {
        const user = verifyToken(req.cookies.accessToken);
        let bill = await Bill.findBillForUser(user.username);
        if (!bill) {
          bill = new Bill({ customer: user.username });
          bill.save();
        }
        idBill = bill.id;
      }
      const newBillingDetail = new BillingDetails({
        id: req.body.id,
        idBill,
        sizeProduct: req.body.sizeProduct,
        colorProduct: req.body.colorProduct,
        nameProduct: req.body.nameProduct,
        quantity: req.body.quantity,
        price: req.body.price,
      });
      await newBillingDetail.save();
      res.status(200).json({
        message: "Add new BillingDetail successfully",
        status: 200,
        data: newBillingDetail,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const billingDetail = await BillingDetails.findOne(req.params.id);
      if (billingDetail) {
        billingDetail.delete();
        res.status(200).json({
          status: 200,
          message: "Delete Successfully !!!",
        });
      } else {
        res.status(404).json({
          status: 404,
          message: "Not found bill",
        });
      }
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  update: async (req, res) => {
    try {
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  getCartForCustomer: async (req, res) => {
    try {
      const user = verifyToken(req.cookies.accessToken);
      let billingDetails = await BillingDetails.getCartForCustomer(
        user.username
      );
      if (!billingDetails) {
        return res.status(404).json({
          status: 404,
          message: "Not found",
        });
      }
      return res.status(200).json({
        status: 200,
        data: billingDetails,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
};
module.exports = { billDetailsController };

const { verifyToken } = require("../middleware/JWTActions");
const { isLogined } = require("../middleware/authentication");
const { Bill } = require("../models/bill");

const billController = {
  findOne: async (req, res) => {
    try {
      const bill = await Bill.findOne(req.params.id);
      if (!bill) {
        return res.status(404).json({
          status: 404,
          message: `Not found bill id ${req.params.id}`,
        });
      }
      res.status(200).json({
        status: 200,
        data: bill,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findAll: async (req, res) => {
    try {
      const bills = await Bill.findAll({ status: req.query.status });
      res.status(200).json({
        status: 200,
        data: bills,
      });
    } catch (err) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  create: async (req, res) => {
    try {
      const newBill = new Bill(req.body);
      await newBill.save();
      res.status(200).json({
        status: 200,
        mess: "Successfully !!!",
        data: {
          id: newBill.id,
        },
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
      const newBill = await Bill.findOne(req.params.id);
      if (newBill) {
        newBill.delete();
        res.status(200).json({
          status: 200,
          message: "Delete Successfully !!!",
        });
      } else {
        return res.status(404).json({
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
  findBillDaybetwenDay: async (req, res) => {
    try {
      let bills = await Bill.findBillDaybetwenDay({
        firstDay: req.query.firstDay,
        seccondDay: req.query.seccondDay,
      });
      if (!bills) {
        return res.status(404).json({
          message: `Not found bill date bettween ${req.query.firstDay} and ${req.query.seccondDay}`,
          status: 404,
        });
      }
      res.status(200).json({
        status: 200,
        data: bills,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  getRevenueForDaybetwenDay: async (req, res) => {
    try {
      let revenue = await Bill.getRevenueForDaybetwenDay({
        firstDay: req.query.firstDay,
        seccondDay: req.query.seccondDay,
      });
      res.status(200).json({
        status: 200,
        data: revenue,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  getTotalAmount: async (req, res) => {
    try {
      let bill = await Bill.findOne(req.query.id);
      if (!bill) {
        return res.status(404).json({
          status: 404,
          message: `Not found bill id ${req.params.id}`,
        });
      }
      let totalAmount = await bill.getTotalAmount();
      res.status(200).json({
        status: 200,
        data: totalAmount,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  Order: async (req, res) => {
    try {
      let bill = null;
      if (req.body.id) {
        bill = await Bill.findOne(req.body.id);
      } else {
        let user = verifyToken(req.cookies.accessToken);
        bill = await Bill.findBillForUser(user.username);
      }
      if (!bill) {
        return res.status(404).json({
          status: 404,
          message: `Not found bill`,
        });
      }
      bill.status = "delivering";
      bill.note = req.body.note ? req.body.note : "";
      await bill.save();
      return res.status(200).json({
        status: 200,
        message: "Success",
        data: bill,
      });
    } catch (error) {
      return res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  update: async (req, res) => {
    try {
      const bill = await Bill.findOne(req.body.id);
      if (!bill) {
        return res.status(404).json({
          status: 404,
          message: `Not found bill id ${req.body.id}`,
        });
      }
      date = new Date(req.body.date);
      bill.status = req.body.status;
      bill.discount = req.body.discount;
      bill.date = date.toLocaleString("en-US", {
        day: "numeric",
        month: "numeric",
        year: "numeric",
      });
      bill.note = req.body.note;
      bill.customer = req.body.customer;
      bill.save();
      res.status(200).json({
        status: 200,
        message: "Success",
        data: bill,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
};
module.exports = { billController };

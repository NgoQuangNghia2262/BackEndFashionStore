const express = require("express");
const router = express.Router();

const { isLogined } = require("../middleware/authentication.js");
const { billController } = require("../controllers/billController.js");

router.get("/findall", billController.findAll);
router.get("/findBillDaybetwenDay", billController.findBillDaybetwenDay);
router.get(
  "/getRevenueForDaybetwenDay",
  billController.getRevenueForDaybetwenDay
);
router.get("/getTotalAmount", billController.getTotalAmount);
router.get("findone/:id", billController.findOne);

router.put("/update", billController.update);

router.post("/create", billController.create);

router.delete("/delete/:id", billController.delete);

router.put("/Order", isLogined, billController.Order);
module.exports = router;

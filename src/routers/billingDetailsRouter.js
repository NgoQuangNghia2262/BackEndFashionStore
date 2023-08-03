const express = require("express");
const router = express.Router();
const {isLogined} = require("../middleware/authentication.js");
const {
  billDetailsController,
} = require("../controllers/billingDetailsController.js");
router.get("/findall", billDetailsController.findAll);
router.get("findone/:id", billDetailsController.findOne);
router.get(
  "/findBillingDetailsByIdBill",
  billDetailsController.findBillingDetailsByIdBill
);
router.get("/getCartForCustomer",isLogined, billDetailsController.getCartForCustomer);

router.post("/create", billDetailsController.create);

router.put("/update", billDetailsController.update);

router.delete("/delete/:id", billDetailsController.delete);

module.exports = router;

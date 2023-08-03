const express = require("express");
const router = express.Router();
const { productController } = require("../controllers/productController.js");

router.get("/findone", productController.findOne);
router.get("/findall", productController.findAll);
router.get("/findproductbyname", productController.findProductByName);
router.get("/findproductbysize", productController.findProductBySize);
router.get("/findproductbycolor", productController.findProductByColor);
router.get("/findproductgroupbyname", productController.findProductGroupbyName);
router.get("/findproductbyword", productController.findProductByWord);
router.get("/findCategory", productController.findCategory);
router.get("/findProductByCategory", productController.findProductByCategory);

router.post("/create", productController.create);

router.delete("/delete/:id", productController.delete);

router.put("/update/:id", productController.update);
module.exports = router;

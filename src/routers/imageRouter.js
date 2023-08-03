const express = require("express");
const router = express.Router();
const imageController = require("../controllers/imageController.js");

router.get("/:nameimage", imageController.findOne);

module.exports = router;

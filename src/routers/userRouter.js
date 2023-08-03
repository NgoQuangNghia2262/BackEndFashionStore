const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");
const { adminAuth  , isLogined } = require("../middleware/authentication.js");

router.get("/getloggedinuser",isLogined, userController.getLoggedInUser);
router.get("/getall",isLogined , adminAuth, userController.findAll);
router.get("/refreshToken",isLogined, userController.refreshToken);
router.get("/:username", userController.findOne);

router.post("/register", userController.register);
router.post("/login", userController.login);

router.delete("/delete/:username",isLogined , adminAuth, userController.delete);

router.put("/changepassword",isLogined, userController.changePassword);

module.exports = router;

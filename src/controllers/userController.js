const { User } = require("../models/user.js");
const {
  generateAccessToken,
  verifyToken,
  generateRefreshToken,
  verifyRefreshToken,
} = require("../middleware/JWTActions.js");
const { isLogined } = require("../middleware/authentication.js");
const bcrypt = require("bcrypt");
const userController = {
  login: async (req, res) => {
    try {
      const user = await User.findOne(req.body.username);
      if (!user) {
        return res.status(404).json({
          status: 404,
          Message: "User not found",
        });
      }
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(403).json({
          status: 403,
          Message: "Wrong password",
        });
      }
      const accessToken = generateAccessToken({
        username: user.username,
        permissions: user.permissions,
      });
      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: false, //Khi deploy phải đổi thành true
        path: "/",
        sameSite: "strict",
      });
      res.status(200).json({
        status: 200,
        data: accessToken,
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  register: async (req, res) => {
    try {
      const oldUser = await User.findOne(req.body.username);
      if (oldUser) {
        return res.status(304).json({
          status: 304,
          Error: "User already exists",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.password, salt);
      const newUser = new User({
        username: req.body.username,
        password: hashed,
        permissions: req.body.permissions,
      });
      await newUser.save();
      res.status(200).send({
        status: 200,
        message: "success",
        data: newUser,
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  changePassword: async (req, res) => {
    try {
      const verifyUser = verifyToken(req.cookies.accessToken);
      const validPassword = await bcrypt.compare(
        req.body.password,
        user.password
      );
      if (!validPassword) {
        return res.status(404).json({
          status: 404,
          Message: "Wrong password",
        });
      }
      if (req.body.newPassword !== req.body.retypeNewPassword) {
        return res.status(404).json({
          status: 404,
          Message: "New password does not match",
        });
      }
      const salt = await bcrypt.genSalt(10);
      const hashed = await bcrypt.hash(req.body.newPassword, salt);
      const user = await User(verifyUser.username);
      user.password = hashed;
      await user.save();
      res.status(200).json({
        status: 200,
        Message: "Change password successfully !!!",
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  refreshToken: async (req, res) => {
    try {
      res.status(200).json({
        status: 200,
        data: "refreshToken",
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  findOne: async (req, res) => {
    try {
      const user = await User.findOne(req.params.username);
      res.status(200).json({
        data: user,
        status: 200,
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
      const users = await User.findAll();
      res.status(200).json({ data: users, status: 200 });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  delete: async (req, res) => {
    try {
      const user = await User.findOne(req.params.username);
      user.delete();
      res.status(200).json({ message: "successfully", status: 200 });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
  getLoggedInUser: async (req, res) => {
    try {
      const user = verifyToken(req.cookies.accessToken);
      res.status(200).json({
        data: user,
        message: "successfully ",
      });
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
};
module.exports = userController;

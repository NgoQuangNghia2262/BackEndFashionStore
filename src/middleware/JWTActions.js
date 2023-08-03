const jwt = require("jsonwebtoken");
require("dotenv").config();
const JWT_SECRET = process.env.JWT_SECRET;
const JWT_REFRESH_KEY = process.env.JWT_REFRESH_KEY;

const generateAccessToken = (payLoad) => {
  let token = null;
  try {
    token = jwt.sign(payLoad, JWT_SECRET);
  } catch (e) {
    console.log(e);
  }
  return token;
};
const verifyToken = (token) => {
  let data = null;
  try {
    data = jwt.verify(token, JWT_SECRET);
  } catch (e) {
    console.log(e);
  }

  return data;
};
const generateRefreshToken = (payLoad) => {
  let token = null;
  try {
    token = jwt.sign(payLoad, JWT_REFRESH_KEY);
  } catch (e) {
    console.log(e);
  }
  return token;
};
const verifyRefreshToken = (token) => {
  let data = null;
  try {
    data = jwt.verify(token, JWT_REFRESH_KEY);
  } catch (e) {
    console.log(e);
  }
  console.log(data);
  return data;
};
module.exports = {
  generateAccessToken,
  verifyToken,
  generateRefreshToken,
  verifyRefreshToken,
};

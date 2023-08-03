const { verifyToken } = require("./JWTActions");

const isLogined = (req, res , next) => {
  const accessToken = req.cookies.accessToken;
  if (!accessToken) {
    return res.status(403).json({
      message: "You're not login !",
      status: 403,
    });
  }
  next();
};
const adminAuth = (req, res, next) => {
  const user = isLogined(req, res);
  if (user.permissions !== "admin") {
    return res.status(403).json({
      message: "You're not authenticated !",
    });
  }
  next();
};
module.exports = { adminAuth, isLogined };

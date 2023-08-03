const path = require("path");

const imageController = {
  findOne: (req, res) => {
    try {
      res.sendFile(path.resolve("src/public/images", req.params.nameimage));
    } catch (e) {
      res.status(500).json({
        message: "Internal Server Error",
        status: 500,
      });
    }
  },
};
module.exports = imageController;

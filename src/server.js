const express = require("express");
const app = express();
const cors = require("cors");
const bodyparser = require("body-parser");
const cookieparser = require("cookie-parser");
require("dotenv").config();

const userRouter = require("./routers/userRouter.js");
const imageRouter = require("./routers/imageRouter.js");
const productRouter = require("./routers/productRouter.js");
const billRouter = require("./routers/billRouter.js");
const billingDetailsRouter = require("./routers/billingDetailsRouter.js");

const port = process.env.PORT || 5080;

app.use(
  cors({
    origin: "http://localhost:8000",
    credentials: true,
  })
);
app.use(bodyparser.json({ limit: "50mb" }));
app.use(cookieparser());
app.use("/v1/data/user", userRouter);
app.use("/v1/data/image", imageRouter);
app.use("/v1/data/product", productRouter);
app.use("/v1/data/bill", billRouter);
app.use("/v1/data/billingdetails", billingDetailsRouter);

app.listen(port, () => {
  console.log("server is running !!! " + port);
});

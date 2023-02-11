const { json, urlencoded } = require("express");
const express = require("express");
const userRouter = require("./routes/userRoute");
const app = express();
const port = 7000;
const cors = require("cors");
require("./db/conn");
const cookieParser = require("cookie-parser");
require("dotenv").config();

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use(cookieParser());
app.use("/user", userRouter);

app.get("/", (req, res) => {
  res.json("hello in the home page");
});
app.listen(port, () => {
  console.log("listening on port " + port);
});

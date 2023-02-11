const express = require("express");
const path = require("path");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
dotenv.config();
connectDB();
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("api is running");
});
app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
const server = app.listen(
  PORT,
  console.log(`server connected at port no ${PORT}`.yellow.bold)
);
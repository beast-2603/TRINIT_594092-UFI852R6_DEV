const { json, urlencoded } = require("express");
const express = require("express");
const userRouter = require("./routes/userRoute");
const app = express();
const port = 7000;
const cors = require("cors");
const { verifyToken } = require("./helpers/tokens");
require("./db/conn");

app.use(json());
app.use(cors());
app.use(urlencoded({ extended: false }));
app.use("/user", userRouter);
app.get("/activate/:token", (req, res) => {
  const verified = verifyToken(req.params.token);
  if (verified) res.status(200).json("You are now verified");
  else res.status(400).json("You are not verified");
});

app.listen(port, () => {
  console.log("listening on port " + port);
});

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/farmers")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log("failed conn");
  });
module.exports = mongoose;
const jwt = require("jsonwebtoken");
const User = require("../models/User");

const userAuthorization = async (req, res, next) => {
  try {
    if (req.cookies.authenticated) {
      const token = req.cookies.authenticated;

      //check weather the token is present in the database
      const isPresent = await User.findOne({ "tokens.token": { $eq: token } });

      if (isPresent) {
        //decode the web token
        const decoded = jwt.verify(token, process.env.SECRET_KEY);

        //get the token data
        const user = await User.findOne({ _id: decoded.id });

        if (user) {
          req.token = token;
          req.user = user;
          next();
        } else {
          res.status(400);
          throw new Error("invalid token");
        }
      } else {
        res.clearCookie("authenticated");
        throw new Error("No token present");
      }
    } else {
      res.status(400);
      throw new Error("Not authorized");
    }
  } catch (err) {
    res.status(400).json(err.message);
  }
};

module.exports = userAuthorization;

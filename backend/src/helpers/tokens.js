const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.generateToken = (payload, expired) => {
  return jwt.sign(payload, "TOKEN_SECRET", { expiresIn: expired });
};
exports.verifyToken = async (token) => {
  const decoded = jwt.verify(token, "TOKEN_SECRET");
  const user = await User.findById(decoded.id);
  if (user) {
    await User.findByIdAndUpdate(decoded.id, { verified: true });
    return true;
  }
  return false;
};

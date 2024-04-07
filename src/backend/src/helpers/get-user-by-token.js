const jwt = require("jsonwebtoken");

const User = require("../models/User");

// Get User by JWT Token
const getUserByToken = async (token) => {
  if (!token) {
    return res.status(401).json({ message: "Acesso Negado!" });
  }

  const decoded = jwt.verify(token, "secret");

  const userId = decoded.id;
  const user = await User.findOne({ _id: userId });

  return user;
};

module.exports = getUserByToken;

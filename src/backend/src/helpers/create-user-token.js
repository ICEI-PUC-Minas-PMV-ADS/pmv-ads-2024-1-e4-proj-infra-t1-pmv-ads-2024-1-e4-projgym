const jwt = require("jsonwebtoken");

const createUserToken = async (user, req, res) => {
  // Create Token
  const token = jwt.sign(
    {
      name: user.name,
      id: user._id,
    },
    "secret"
  );
  // Return Token
  res
    .status(200)
    .json({
      message: "Autenticado com sucesso!",
      token: token,
      userId: user._id,
    });
};

module.exports = createUserToken;

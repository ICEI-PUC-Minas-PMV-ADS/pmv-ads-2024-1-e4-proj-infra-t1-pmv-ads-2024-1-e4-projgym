const router = require("express").Router();

const UserController = require("../controllers/UserController");

// Middlewares
const verifyToken = require("../helpers/verify-token")

router.post("/register", UserController.register);
router.post("/login", UserController.login);
router.get("/checkuser", UserController.checkUser);
router.get("/:id", UserController.getUserById);
router.patch("/edit/:id", verifyToken, UserController.editUser);

router.post("/historico", UserController.createHist);
router.get("/:id/historico", UserController.getAllHist);
router.delete("/:id/historico/:hist_id", UserController.deleteHist);

module.exports = router;

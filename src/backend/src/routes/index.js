const router = require("express").Router();


const exercisesRouter = require("./exercises.routes");

router.use("/", exercisesRouter);

module.exports = router;
const router = require("express").Router();

const exerciseController = require("../controllers/ExerciseController");

router
  .route("/exercises")
  .post((req, res) => exerciseController.create(req, res));

router
  .route("/exercises")
  .get((req, res) => exerciseController.getAll(req, res));

router
  .route("/exercises/:id")
  .get((req, res) => exerciseController.get(req, res));

router
  .route("/exercises/:id")
  .delete((req, res) => exerciseController.delete(req, res));

router
  .route("/exercises/:id")
  .put((req, res) => exerciseController.update(req, res));


module.exports = router;

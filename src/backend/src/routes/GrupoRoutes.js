const router = require("express").Router();

const grupoController = require("../controllers/GrupoController");

router
  .route("/grupo")
  .post((req, res) => grupoController.create(req, res));

router
  .route("/grupo")
  .get((req, res) => grupoController.getAll(req, res));

router
  .route("/grupo/:id")
  .get((req, res) => grupoController.get(req, res));

router
  .route("/grupo/:id")
  .delete((req, res) => grupoController.delete(req, res));

router
  .route("/grupo/:id")
  .put((req, res) => grupoController.update(req, res));


module.exports = router;

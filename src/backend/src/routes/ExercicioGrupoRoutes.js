const router = require("express").Router();

const exercicioGrupoController = require("../controllers/ExercicioGrupoController");

router
  .route("/exer_grupo")
  .post((req, res) => exercicioGrupoController.create(req, res));

router
  .route("/exer_grupo")
  .get((req, res) => exercicioGrupoController.getAll(req, res));

router
  .route("/exer_grupo/:id")
  .get((req, res) => exercicioGrupoController.get(req, res));

router
  .route("/exer_grupo/:id")
  .delete((req, res) => exercicioGrupoController.delete(req, res));

router
  .route("/exer_grupo/:id")
  .put((req, res) => exercicioGrupoController.update(req, res));


module.exports = router;

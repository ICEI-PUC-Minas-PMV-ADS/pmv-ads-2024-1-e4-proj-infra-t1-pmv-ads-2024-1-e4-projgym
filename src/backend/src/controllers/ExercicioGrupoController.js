const { ExercicioGrupo: ExercicioGrupoModel } = require("../models/ExercicioGrupo");

const exercicioGrupoController = {

    // OK
  create: async (req, res) => {
    try {
      const item = {
        grupo_id: req.body.grupo_id,
        exer_id: req.body.exer_id,
      };

      const response = await ExercicioGrupoModel.create(item);

      res.status(201).json({ response, message: "Created" });

    } catch (error) {
      console.log(error);
    }
  },

  getAll: async (req, res) => {
    try {
      const item = await ExercicioGrupoModel.find();

      res.json(item);

    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const item = await ExercicioGrupoModel.findById(id);

      if (!item) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(item);

    } catch (error) {
      console.log(error);
    }
  },

  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const item = await ExercicioGrupoModel.findById(id);

      if (!item) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      const deleted = await ExercicioGrupoModel.findByIdAndDelete(id);

      res.status(200).json({ deleted, message: "Deleted" });

    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const item = {
        grupo_id: req.body.grupo_id,
        exer_id: req.body.exer_id,
      };

      const updated = await ExercicioGrupoModel.findByIdAndUpdate(id, item);

      if (!updated) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ item, message: "Updated" });

    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = exercicioGrupoController;

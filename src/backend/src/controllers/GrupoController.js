const { Grupo: GrupoModel } = require("../models/Grupo");

const grupoController = {

    // OK
  create: async (req, res) => {
    try {
      const grupo = {
        nome: req.body.nome,
        user_id: req.body.user_id,
      };

      const response = await GrupoModel.create(grupo);

      res.status(201).json({ response, message: "Created" });
    } catch (error) {
      console.log(error);
    }
  },

  // OK
  getAll: async (req, res) => {
    try {
      const grupo = await GrupoModel.find();
      res.json(grupo);

    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const grupo = await GrupoModel.findById(id);

      if (!grupo) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(grupo);

    } catch (error) {
      console.log(error);
    }
  },


  // OK
  delete: async (req, res) => {
    try {
      const id = req.params.id;

      const grupo = await GrupoModel.findById(id);

      if (!grupo) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      const deleted = await GrupoModel.findByIdAndDelete(id);

      res.status(200).json({ deleted, message: "Deleted" });

    } catch (error) {
      console.log(error);
    }
  },


  // OK
  update: async (req, res) => {
    try {
      const id = req.params.id;

      const grupo = {
        nome: req.body.nome,
        user_id: req.body.user_id,
      };

      const updated = await GrupoModel.findByIdAndUpdate(id, grupo);

      if (!updated) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ updated, message: "Updated" });

    } catch (error) {
      console.log(error);
    }
  },
};

module.exports = grupoController;

const { User: UserModel } = require("../models/User");
const uuid = require('uuid');

const userController = {

    // OK
  create: async (req, res) => {
    try {
      const item = {
        nome: req.body.nome,
        avatar: req.body.avatar,
      };

      const response = await UserModel.create(item);

      res.status(201).json({ response, message: "Created" });

    } catch (error) {
      console.log(error);
    }
  },

  get: async (req, res) => {
    try {
      const id = req.params.id;

      const item = await UserModel.findById(id);

      if (!item) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.json(item);

    } catch (error) {
      console.log(error);
    }
  },

  update: async (req, res) => {
    try {
      const id = req.params.id;

      const item = {
        nome: req.body.nome,
        avatar: req.body.avatar
      };

      const updated = await UserModel.findByIdAndUpdate(id, item);

      if (!updated) {
        res.status(404).json({ message: "Not Found" });
        return;
      }

      res.status(200).json({ item, message: "Updated" });

    } catch (error) {
      console.log(error);
    }
  },


  //  ----- Historicos -----


  // OK
  createHist: async (req, res) => {
    try {
        let agora = new Date()
            , exer_id = req.body.exer_id
            , user_id = req.body.user_id 
        ;

        const hist = {
            _id: uuid.v4(), 
            exer_id: exer_id,
            data: agora,
        };

        const updated = await UserModel.findByIdAndUpdate(user_id, {
            $push: { historicos: hist },
        }, { new: true });

        res.status(201).json({ response, message: "Histórico criado" });

    } catch (error) {
         console.log(error);
    }
  },

  // OK
  getAllHist: async (req, res) => {
    try {
        const id = req.params.id;
        const item = await UserModel.findById(id,
            {historicos: 1}
        );

        res.json(item);

    } catch (error) {
      console.log(error);
    }
  },


  // OK
  deleteHist: async (req, res) => {
    try {
        let user_id = req.body.user_id
            , hist = {
                _id: req.body.hist_id
            }
        ;

        const updated = await UserModel.findByIdAndUpdate(user_id, {
            $pull: { historicos: hist },
        }, { new: true });

      res.status(200).json({ deleted, message: "Histórico deletado" });

    } catch (error) {
      console.log(error);
    }
  },

};

module.exports = userController;

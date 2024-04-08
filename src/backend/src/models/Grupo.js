const mongoose = require("mongoose");

const { Schema } = mongoose;

const grupoSchema = new Schema(
  {
    nome: {
      type: String,
      required: true,
    },
    user_id: {
        //references
        type: Schema.Types.ObjectId,
        ref: "User",
    },
  },
  { timestamps: true }
);

const Grupo = mongoose.model("Grupo", grupoSchema);

module.exports = {
  Grupo,
  grupoSchema,
};

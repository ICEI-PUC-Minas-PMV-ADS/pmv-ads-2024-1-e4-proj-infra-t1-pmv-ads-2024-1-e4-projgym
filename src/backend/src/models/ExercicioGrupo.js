const mongoose = require("mongoose");

const { Schema } = mongoose;

const exercicioGrupoSchema = new Schema(
  {
    grupo_id: {
        //references
        type: Schema.Types.ObjectId,
        ref: "Grupo",
        required: true
    },
    exer_id: {
        //references
        type: Schema.Types.ObjectId,
        ref: "Exercise",
        required: true,
    },
  },
  { timestamps: true }
);

const ExercicioGrupo = mongoose.model("ExercicioGrupo", exercicioGrupoSchema);

module.exports = {
  ExercicioGrupo,
  exercicioGrupoSchema,
};

const mongoose = require("mongoose");

const { Schema } = mongoose;

const exerciseSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    series: {
      type: Number,
      required: true,
    },
    repetitions: {
      type: Number,
      required: true,
    },
    demo: {
      type: String,
      required: true,
    },
    thumb: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Exercise = mongoose.model("Exercise", exerciseSchema);

module.exports = {
  Exercise,
  exerciseSchema,
};

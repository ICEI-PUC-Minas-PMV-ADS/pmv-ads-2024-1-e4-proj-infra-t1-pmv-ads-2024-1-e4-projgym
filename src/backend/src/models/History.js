const mongoose = require("mongoose");

const { Schema } = mongoose;

const historySchema = new Schema(
  {
    user_id: {
      //references
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    exercise_id: {
      //references
      type: Schema.Types.ObjectId,
      ref: "Exercises",
      required: true,
    },
  },
  { timestamps: true }
);

const History = mongoose.model("History", historySchema);

module.exports = {
  History,
  historySchema,
};

const mongoose = require("mongoose");

const { Schema } = mongoose;

const usersTokenSchema = new Schema(
  {
    expires_in: {
      type: Number,
      required: true,
    },
    user_id: {
      //references
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const UsersToken = mongoose.model("UsersToken", usersTokenSchema);

module.exports = {
  UsersToken,
  usersTokenSchema,
};

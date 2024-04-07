const mongoose = require("mongoose");

const { Schema } = mongoose;

const userTokenSchema = new Schema(
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

const UserToken = mongoose.model("UserToken", userTokenSchema);

module.exports = {
  UserToken,
  userTokenSchema,
};

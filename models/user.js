const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const schema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
      unique: true,
      index: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minlength: 5,
    },
    roles: {
      type: String,
      default: "member",
    },
  },
  {
    collection: "users",
  }
);

schema.methods.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(5);
  const hashPassword = bcrypt.hash(password, salt);
  return hashPassword;
};

const user = mongoose.model("User", schema);

module.exports = user;

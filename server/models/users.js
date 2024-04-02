const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  job: String,
  image: String,
});

const UserSchema = mongoose.model("users", userSchema);
module.exports = UserSchema;

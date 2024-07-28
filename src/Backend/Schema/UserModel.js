const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: { type: String },
  mobile: { type: Number },
  email: { type: String },
  password: { type: String },
  gender: { type: String },
  address: { type: String },
  dob: { type: String },
});
const UserModel = mongoose.model("Users", UserSchema);
module.exports = UserModel;

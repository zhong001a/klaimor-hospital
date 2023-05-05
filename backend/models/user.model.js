const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true, unique: true },
  password: { type: String, require: true, minlength: 6 },
  userdata: [{ type: mongoose.Types.ObjectId, require: true, ref: 'UserData'}]
});

userSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('User',userSchema);
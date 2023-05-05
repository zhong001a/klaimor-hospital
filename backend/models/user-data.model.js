const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true},
  gender: { type: String, require: true, minlength: 6 },
  birthdate: { type: String, require: true },
  heigth: { type: String, require: true },
  heigth: { type: String, require: true },
  userId: { type: mongoose.Types.ObjectId, require: true, ref: 'User'}
});

userDataSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('UserData',userDataSchema);
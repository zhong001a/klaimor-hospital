const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  firstname: { type: String, require: true },
  lastname: { type: String, require: true},
  gender: { type: String, require: true, },
  birthdate: { type: String, require: true },
  heigth: { type: String, require: true },
  weight: { type: String, require: true },
  userId: { type: mongoose.Types.ObjectId, require: true, ref: 'User'}
});


module.exports = mongoose.model('UserData',userDataSchema);
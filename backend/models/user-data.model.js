const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userDataSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true},
  gender: { type: String, required: true, },
  birthdate: { type: String, required: true },
  heigth: { type: String, required: true },
  weight: { type: String, required: true },
  userId: { type: mongoose.Types.ObjectId, required: true, ref: 'User'}
});


module.exports = mongoose.model('UserData',userDataSchema);
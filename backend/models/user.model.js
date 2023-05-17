const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, required: true},
  phone: { type: String, required: true},
  password: { type: String, required: true, minlength: 6 },
  userdata: [{ type: mongoose.Types.ObjectId, required: true, ref: 'UserData'}],
  userappoint: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Appointment'}]
});



module.exports = mongoose.model('User',userSchema);
const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: { type: String, require: true },
  email: { type: String, require: true},
  phone: { type: String, require: true},
  password: { type: String, require: true, minlength: 6 },
  userdata: [{ type: mongoose.Types.ObjectId, require: true, ref: 'UserData'}],
  userappoint: [{ type: mongoose.Types.ObjectId, require: true, ref: 'Appointment'}]
});



module.exports = mongoose.model('User',userSchema);
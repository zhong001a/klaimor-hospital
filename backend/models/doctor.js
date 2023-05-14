const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  imageUrl: { type: String, require: true },
  name: { type: String, require: true },
  expertise: { type: String, require: true, minlength: 6 },
  appoint: [{ type: mongoose.Types.ObjectId, require: true, ref: 'Appointment'}]
});



module.exports = mongoose.model('Doctor',doctorSchema);
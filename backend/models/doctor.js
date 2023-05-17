const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  imageUrl: { type: String, required: true },
  name: { type: String, required: true },
  expertise: { type: String, required: true, minlength: 6 },
  appoint: [{ type: mongoose.Types.ObjectId, required: true, ref: 'Appointment'}]
});



module.exports = mongoose.model('Doctor',doctorSchema);
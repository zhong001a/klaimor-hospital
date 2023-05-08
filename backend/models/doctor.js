const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const doctorSchema = new Schema({
  imageUrl: { type: String, require: true },
  name: { type: String, require: true, unique: true },
  expertise: { type: String, require: true, minlength: 6 },
 
});

doctorSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Doctor',doctorSchema);
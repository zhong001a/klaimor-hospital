const mongoose = require("mongoose");
const mongooseUniqueValidator = require('mongoose-unique-validator')
const Schema = mongoose.Schema;

const appoinSchema = new Schema({
  name: { type: String, require: true },
  phone: { type: String, require: true, unique: true },
  email: { type: String, require: true, unique: true },
  expertise: { type: String, require: true  },
  symptom: { type: String, require: true  }
 
});

appoinSchema.plugin(mongooseUniqueValidator);

module.exports = mongoose.model('Appointment',appoinSchema);
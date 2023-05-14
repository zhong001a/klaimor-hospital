const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appoinSchema = new Schema({
  name: { type: String, require: true },
  phone: { type: String, require: true  },
  email: { type: String, require: true },
  expertise: { type: String, require: true  },
  doctorId: [{ type: mongoose.Types.ObjectId, ref: 'Doctor' }],
  symptom: { type: String, require: true  },
  userId: [{ type: mongoose.Types.ObjectId, require: true, ref: 'User'}]
 
});



module.exports = mongoose.model('Appointment',appoinSchema);
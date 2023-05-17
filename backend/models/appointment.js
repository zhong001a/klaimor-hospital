const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const appoinSchema = new Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true  },
  email: { type: String, required: true },
  expertise: { type: String, required: true  },
  symptom: { type: String, required: true  },
  date: { type: String, required: true  },
  time: { type: String, required: true  },
  doctorId: [{ type: mongoose.Types.ObjectId, ref: 'Doctor' }],
  userId: [{ type: mongoose.Types.ObjectId, required: true, ref: 'User'}]

});



module.exports = mongoose.model('Appointment',appoinSchema);
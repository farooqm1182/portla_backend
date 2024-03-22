const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  date: { type: String, required: true },
  time: { type: String, required: true },
  service: { type: String, required: true },
  client: { type: String, required: true },
  duration: { type: String, required: true },
  status: { type: String, required: true },
  employee: { type: String, required: true },
  avatar: { type: String, required: false },
  note: { type: String },
});

const Appointment = mongoose.model("Appointment", appointmentSchema);

module.exports = Appointment;

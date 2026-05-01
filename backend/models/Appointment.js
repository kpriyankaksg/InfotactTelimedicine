
// models/Appointment.js
const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  department: { type: String },
  date: { type: Date, required: true },
  mode: { type: String, enum: ["Online", "In-Person"], required: true },
  status: { type: String, enum: ["Scheduled", "Completed", "Cancelled"], default: "Scheduled" },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
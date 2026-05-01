// models/Doctor.js
const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  specialization: { type: String, required: true },
  department: { type: String },
  experience: { type: Number }, // years
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Doctor", doctorSchema);
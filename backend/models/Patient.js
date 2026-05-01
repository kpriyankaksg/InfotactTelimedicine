// models/Patient.js
const mongoose = require("mongoose");

const patientSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  mobile: { type: String, required: true },
  gender: { type: String, enum: ["Male", "Female", "Other"], required: true },
  dob: { type: Date },
  address: { type: String },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Patient", patientSchema);
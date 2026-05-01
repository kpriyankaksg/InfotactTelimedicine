
// models/MedicalRecord.js
const mongoose = require("mongoose");

const medicalRecordSchema = new mongoose.Schema({
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor" },
  diagnosis: { type: String, required: true },
  notes: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("MedicalRecord", medicalRecordSchema);
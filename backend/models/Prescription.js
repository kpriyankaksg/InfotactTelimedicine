
// models/Prescription.js
const mongoose = require("mongoose");

const prescriptionSchema = new mongoose.Schema({
  // prescriptionId: { type: String, required: true, unique: true },
  patient: { type: mongoose.Schema.Types.ObjectId, ref: "Patient", required: true },
  doctor: { type: mongoose.Schema.Types.ObjectId, ref: "Doctor", required: true },
  medicines: [
    {
      name: { type: String, required: true },
      dosage: { type: String },
      frequency: { type: String },
      duration: { type: String },
    },
  ],
  notes: { type: String },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Prescription", prescriptionSchema);
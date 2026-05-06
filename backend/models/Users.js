 const mongoose = require('mongoose');
//import mongoose from "mongoose";


const userSchema= new mongoose.Schema({
  role: { type: String, required: true, enum: ['Patient', 'Doctor','Admin'] },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
 
});

 module.exports= mongoose.model("Users", userSchema);
// export default mongoose.models.Users || mongoose.model("Users", userSchema);

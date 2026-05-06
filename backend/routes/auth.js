import bcrypt from "bcryptjs";
import express from "express";
import jwt from "jsonwebtoken";
import User from "../models/Users.js";
//const jwt = require("jsonwebtoken");
//const User = require("../models/users");
const router = express.Router();

//..........registration....
router.post("/register", async (req, res) => {
  const { role, name, email, password } = req.body;
  console.log(req.body);
  if (!email || !password) {
    return res.status(400).json({ message: "Fields missing" });
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 8);
    const user = new User({role, name, email, password: hashedPassword});
    console.log(user);
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
   
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Patient Login

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try{
    const user = await User.findOne({ email });
   console.log("enter1");
   if (!user) return res.status(400).json({ error: "Invalid credentials" });

  const isMatch = await bcrypt.compare(password, user.password);
  
   if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "1h" });
 console.log("enter2");
  res.json({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role
                            
   } });

  }
  catch(err){
    console.log("enter_catch");
    console.error("Login error:", err);
  res.status(500).json({ error: "Server error" });


  }
  
});


export default router;
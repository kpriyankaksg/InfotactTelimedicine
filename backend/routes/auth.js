import bcrypt from "bcryptjs";
import express from "express";
import User from "../models/Users.js";
//const User = require("../models/users");
const router = express.Router();


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

export default router;
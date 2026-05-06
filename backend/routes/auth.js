import express from "express";
import Users from "../models/Users.js";
import bcrypt from "bcryptjs";

const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { role, name, email, password } = req.body;

    const existingUser = await Users.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new Users({
      role,
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.status(201).json({ message: "User registered successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Error registering user", error: error.message });
  }
});

export default router;
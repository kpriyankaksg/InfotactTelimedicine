
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import authRoutes from "./routes/auth.js";



dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.ATLAS_URL)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));


// const authRoutes = require("./routes/auth");
app.use("/api/auth", authRoutes);

app.listen(5000, () => console.log("Server running on port 5000"));
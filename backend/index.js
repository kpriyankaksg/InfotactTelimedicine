
import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";


dotenv.config();

const app = express();


// Middleware
app.use(cors());
app.use(express.json());




// MongoDB connection
mongoose.connect(process.env.ATLAS_URL)
  .then(() => console.log("✅ Connected to MongoDB Atlas"))
  .catch((error) => console.error("MongoDB connection error:", error));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
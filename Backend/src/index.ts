import cors from "cors";
import "dotenv/config";
import express, { Request, Response } from "express";
import mongoose from "mongoose";

// 🚀 Connect to MongoDB
mongoose.connect(process.env.MONGODB_URL as string)
  .then(() => {
    console.log("🌐 MongoDB connected successfully!");
  })
  .catch(err => console.error("❌ Mongoose error:", err));


// 🚀 Create an Express app
const app = express();

// 🛡️ Middleware
// 🛡️ Use JSON middleware for parsing incoming requests with JSON payloads
app.use(express.json());
// 🌐 Enable CORS for all routes to allow cross-origin requests
app.use(cors());

// 🚀 Define Routes
// 🛤️ Test route: Responds with a JSON message
app.get("/test", (req: Request, res: Response) => {
  res.json({ message: "👋 Hello, world! 🌍" });
});

// 🚀 Start the server
const PORT = process.env.PORT || 7000; // Use environment variable for port or default to 7000
// 🚀 Start the server and listen for incoming connections
app.listen(PORT, () => {
  // 🌟 Log a message indicating that the server is running
  console.log(`🚀 Server is running on port ${PORT}!`);
});

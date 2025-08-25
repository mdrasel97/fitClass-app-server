const express = require("express");
const cors = require("cors");
require("dotenv").config();
const connectDB = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Fit Class App Server Running");
});

// Example API route (fetch data from MongoDB)
app.get("/users", async (req, res) => {
  const db = await connectDB();
  const users = await db.collection("users").find().toArray();
  res.json(users);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});

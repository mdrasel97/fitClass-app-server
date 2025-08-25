const { MongoClient } = require("mongodb");
require("dotenv").config();

const client = new MongoClient(process.env.MONGO_URI);

let db;

async function connectDB() {
  if (!db) {
    await client.connect();
    db = client.db("myDatabase"); // replace with your DB name
    console.log("✅ MongoDB Connected");
  }
  return db;
}

module.exports = connectDB;

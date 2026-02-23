//first of all a quick check on the code (express ,dotenv,mongoose)
//
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskRoutes");

const app = express();
app.use(express.json());

// DB Connection
//refactoring to async function for better readability and error handling #1st change
async function connectDB() {
  try{
await mongoose.connect(process.env.DB_URL)
//checking the .env file for database URL and port number //=>done by creating .env file and adding DB_URL and PORT #2nd change
  console.log("MongoDB Connected")
 }catch(error) 
 {console.log(error);
 }
}
connectDB();
// first run for the server and database connection #3rd change//=>server running and db connected successfully
app.use("/api", taskRoutes);




const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

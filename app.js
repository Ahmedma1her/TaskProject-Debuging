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
// first run for the server and database connection #3rd change//=>server running and db connected successfully// starting to test with postman
app.use("/api", taskRoutes);
// used http://localhost:8000/api/tasks to post=>task created but there
//  was an error with the is complete attribute as it always gives false


//checking the task model//=> found the isCompleted attribute is of type string  
// which is not correct //changed to  boolean and "false" to false #4th change


//still getting the same error ,, checking the controller// committing the changes.

//changes applied in controller and checked the createTasks and getTasks and they worked fine .

// for the createTaskWithCheck it was working on the different route however logically every task created should be checked for duplication
///so merging the createTask and createTaskWithCheck functions #7th change


// final check on the code and testing with postman and it worked fine with the createTask function and getTasks function






const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

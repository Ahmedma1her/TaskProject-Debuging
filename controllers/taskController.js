const Task = require("../models/Task");
//upon checking the controller found functions without async await and without error handling.. refactoring.#5th change
// const createTask = async (req, res) => {
//   try {
//   const { title, isCompleted } = req.body;
//   if (!title) return res.status(400).json({ msg: "Title is required" });

//   const task = await Task.create({ title, isCompleted });
//     res.status(201).json({ 
//       success: true,
//        msg: "Task Created",
//         data: task 
//       });
//   } catch (error) {
//     res.status(500).json({
//       success: false,
//        msg: "Error creating task",
//         error: error.message });
//   }
// };
//found the error with the is iscomplete attribute as it always gives false.// it was wrote iscomplete instead of isCompleted in the controller and model #6th change



const getTasks = async (req, res) => {
  try {
    const task = await Task.find();
    res.status(200).json({
       success: true,
        msg: "Tasks List",
         data: task });
  } catch (error) {
    res.status(500).json({ success: false,
       msg: "Error fetching tasks",
        error: error.message });
  }
};

const createTask = async (req, res) => {
 try {
  const { title, isCompleted } = req.body;
  const exist = await Task.findOne({ title });
  if (exist) return res.status(400).json({ msg: "Task already exists" });

  const task = await Task.create({ title, isCompleted });
  res.status(201).json({ 
    success: true,
     msg: "Task Created",
      data: task });
} catch (error) {
  res.status(500).json({ success: false,
     msg: "Error creating task",
      error: error.message });
}
};

module.exports = {
  createTask,
  getTasks,
}

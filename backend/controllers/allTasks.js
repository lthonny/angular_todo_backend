const tasklist = require('./../models/index');

const allTasks = async (req, res) => {
  try {
    const tasks = await tasklist.allTasks();
    res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = allTasks;
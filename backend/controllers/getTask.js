const tasklist = require('../models/index');

const getTask = async (req, res) => {
  const id = await req.params.id;

  try {
    const task = await tasklist.getTask(id);
    res.json(task);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = getTask;
const tasklist = require('./../models/index');

const addTask = async (req, res) => {
  try {
    await tasklist.addTask(req.body);
    // res.status(200).end();
    res.sendStatus(204);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = addTask;
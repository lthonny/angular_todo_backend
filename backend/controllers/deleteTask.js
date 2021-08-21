const tasklist = require('./../models/index');

const deleteTask = async (req, res) => {
  try {
    await tasklist.deleteTask(req.params.id);
    res.status(200).end();
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = deleteTask;
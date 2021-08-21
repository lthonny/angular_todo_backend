const tasklist = require('./../models/index');

const editTask = async (req, res) => {
  const id = await req.params.id;

  try {
    const { title, text, status } = req.body;

    const task = await tasklist.editTask(id, req.body);
    // console.log('task', task)

    res.json(task);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = editTask;
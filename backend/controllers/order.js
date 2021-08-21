const tasklist = require('./../models/index');

const order = async (req, res) => {

  try {
    const tasks = await tasklist.order(req.body);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = order;
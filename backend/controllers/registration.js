const tasklist = require('./../models/index');

const registration = async (req, res) => {

  try {
    const tasks = await tasklist.registration(req.body);
    await res.json(tasks);
  } catch (e) {
    res.sendStatus(500);
  }
}

module.exports = registration;
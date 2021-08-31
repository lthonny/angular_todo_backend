const models = require("../models/index");
const Task = models.Tasks;

class TasksController {
  async create({ body, decoded }, res, next) {
    try {
      const { title, text, status } = body;
      const { user_id } = decoded;
      console.log(decoded);
      const todo = await Task.create({ title, text, status, user_id });
      return res.status(201).send({ todo });
    } catch (e) {
      return next(new Error(e));
    }
  }
}

module.exports = new TasksController();
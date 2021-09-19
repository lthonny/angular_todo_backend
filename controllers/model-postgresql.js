const models = require("../models/index");
const Task = models.Task;

const ModelPostgresql = {
  async create({ body, decoded }, res, next) {
    try {
      const { title, text, status } = body;
      const { id } = decoded;
      const todo = await Task.create({ title, text, status, user_id: id });
      return res.status(201).send({ todo });
    } catch (e) {
      next(e);
    }
  },

  async fetchOne({ params, decoded }, res, next) {
    try {
      const myTodo = await Task.findOne({
        where: { id: params.id, user_id: decoded.id }
      });
      if (!myTodo) {
        return res.status(404).send({ error: 'task not found' });
      }
      return res.status(200).send(myTodo);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async fetchAll({ decoded }, res, next) {
    try {
      const myTodos = await Task.findAll({
        where: { user_id: decoded.id }
      });
      return res.status(200).send(myTodos);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async update({ body, decoded, params }, res, next) {
    try {
      const task = await Task.findOne({ where: { id: params.id, user_id: decoded.id } });
      if (!task) {
        return res.status(400).send({ error: 'Wrong task id' });
      }

      const updatedTask = await Task.update({
        title: body.title || task.title,
        text: body.text || task.text,
        status: body.status
      }, { where: { id: task.id } });

      console.log(updatedTask)

      const updated = await Task.findOne({ where: { id: params.id } });
      return res.status(200).send(updated);
    } catch (e) {
      return next(new Error(e));
    }
  },

  async delete(req, res, next) {
    try {
      const { id } = req.params;

      if (!id) { return res.status(400).send({ error: 'id is required' }); }
      const item = await Task.findOne({ where: { id } });
      if (!item) {
        return res.status(404).send({ error: 'task does not exist' });
      }
      await item.destroy();
      return res.status(200).send({});
    } catch (e) {
      return next(new Error(e));
    }
  },

  async isauth(req, res, next) {
    try {
      return res.status(200).end();
    } catch(e) {
      return next(new Error(e));
    }
  }
}

module.exports = ModelPostgresql;
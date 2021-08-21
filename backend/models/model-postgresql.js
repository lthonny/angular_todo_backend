const models = require("./.././../models");
const Tasks = models.Tasks;

class ModelPostgresql {
  async getTask(id) {
    return Tasks.findOne({ where: { id: id } });
  }

  async allTasks() {
    return Tasks.findAll({
      order: [['createdAt', 'DESC']]
    });
  }

  async addTask(data) {
    const { title, text } = data;

    const task = await Tasks.create({
      title: title,
      text: text,
      status: false
    })
  }

  async editTask(id, data) {
    // const { title, text, status } = data;
    const task = await this.getTask(id);
    const a = await task.update({ ...data });
    // console.log(a);

    // task.status = status;
    // task.update
    // console.log('task', task);

    // if (title !== undefined && title !== null) {
    // const a = await Tasks.update(
    //   { ...data },
    //   { where: { id }, returning: true }
    // );

    // console.log(a[1]);
    // }

    // if (text !== undefined && text !== null) {
    //   Tasks.update(
    //     { text: text },
    //     { where: { id: id } }
    //   );
    // }


    // if (status !== undefined && status !== null) {
    //   const taskStatus = await Tasks.update(
    //     { status: !status },
    //     { where: { id }, returning: true }
    //   );
    //   // console.log('taskStatus', taskStatus);
    // }

    // if (status !== undefined && status !== null) {
    //   const taskStatus = await Tasks.update(
    //     { status: !status },
    //     {
    //       where: { id },
    //       returning: true
    //     }
    //   );
    // console.log(taskStatus[1].Tasks.dataValues);
    // console.log(taskStatus[1].dataValues);
    // }

    // return Tasks.update(
    //   { title: title, status: !status, text: text },
    //   { where: { id: id } }
    // );
    return a.get({ plain: true });
  }

  async registration(body) {
    return body;
  }

  async order() {
    return Tasks.findAll();
  }

  async deleteTask(id) {
    await Tasks.destroy({
      where: { id: id },
    });
  }
}

module.exports = ModelPostgresql;
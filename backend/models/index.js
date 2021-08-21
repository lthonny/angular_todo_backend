// const ModelJson = require('./model-json');
const ModelPostgres = require('./model-postgresql');

class TaskListFactory {
  create(type) {
    let tasklist;
    // if (type === 'json') {
    //   tasklist = new ModelJson()
    // }
    if (type === 'postgresql') {
      tasklist = new ModelPostgres()
    }
    return tasklist;
  };
}

const tasklistFactory = new TaskListFactory();
const tasklist = tasklistFactory.create('postgresql');

module.exports = tasklist;

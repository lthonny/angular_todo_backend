require("dotenv").config();
const { DB_USERNAME, DB_PASSWORD } = process.env;

module.exports = {
  development: {
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: "angular_tasks",
    host: "127.0.0.1",
    port: 3333,
    dialect: "postgres"
  },
  test: {
    username: "postgres",
    password: "secret",
    database: "angular_tasks",
    host: "127.0.0.1",
    port: 3333,
    dialect: "postgres"
  },
  production: {
    username: "postgres",
    password: "secret",
    database: "angular_tasks",
    host: "127.0.0.1",
    port: 3333,
    dialect: "postgres"
  }
};
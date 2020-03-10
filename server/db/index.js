const { DB_USER, DB_PASSWORD } = require("./config.js");

const Promise = require("bluebird");
const mysql = require("mysql");

const connection = Promise.promisifyAll(
  mysql.createConnection({
    host: "localhost",
    user: DB_USER,
    password: DB_PASSWORD,
    database: "budget"
  })
);

connection.connect();

module.exports = connection;

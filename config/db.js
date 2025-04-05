const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("auth_db", "postgres", "Aryan@2003", {
  host: "localhost",
  port: 5000, // Important!
  dialect: "postgres",
});

module.exports = sequelize;

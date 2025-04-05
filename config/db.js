const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("auth_db", "postgres", "your_Password", {
  host: "localhost",
  port: 5000, // Important!
  dialect: "postgres",
});

module.exports = sequelize;

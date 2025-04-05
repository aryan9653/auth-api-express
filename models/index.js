const sequelize = require('../config/db');
const User = require('./user');

(async () => {
  try {
    await sequelize.sync({ alter: true });
    console.log('Database synced.');
  } catch (err) {
    console.error('Error syncing DB:', err);
  }
})();

module.exports = { User };

require('dotenv').config();
const express = require('express');
const app = express();
const authRoutes = require('./routes/authRoutes');
const { sequelize } = require('./models/user');

app.use(express.json());
app.use(authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, async () => {
  try {
    await sequelize.sync();
    console.log(`Server running on port ${PORT}`);
  } catch (err) {
    console.error('Error syncing DB:', err);
  }
});

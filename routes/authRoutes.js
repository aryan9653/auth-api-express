const express = require('express');
const router = express.Router();
const { signup, login, profile } = require('../controllers/authController');
const { auth, requireRole } = require('../middleware/authMiddleware');

router.post('/signup', signup);
router.post('/login', login);
router.get('/profile', auth, profile);

// Example: only admins can access
router.get('/admin', auth, requireRole('admin'), (req, res) => {
  res.send('Welcome, Admin!');
});

module.exports = router;

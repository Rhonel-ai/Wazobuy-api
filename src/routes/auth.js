const express = require('express');
const router = express.Router();

// POST /auth/register
router.post('/register', (req, res) => {
  res.send('Register user');
});

// POST /auth/login
router.post('/login', (req, res) => {
  res.send('Login user');
});

module.exports = router;

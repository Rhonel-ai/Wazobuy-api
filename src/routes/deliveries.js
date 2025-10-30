const express = require('express');
const router = express.Router();

// GET /api/deliveries
router.get('/', (req, res) => {
  res.send('List of deliveries');
});

module.exports = router;

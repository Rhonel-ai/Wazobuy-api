const express = require('express');
const router = express.Router();

// POST /api/orders
router.post('/', (req, res) => {
  res.send('Create an order');
});

// GET /api/orders/:id
router.get('/:id', (req, res) => {
  res.send(`Get order ${req.params.id}`);
});

module.exports = router;

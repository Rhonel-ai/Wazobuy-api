// src/routes/products.js
const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const upload = require('../middleware/upload'); // <-- import du middleware

// GET /api/products
router.get('/', async (req, res) => {
  const { q, category, limit = 20 } = req.query;
  const filters = {};

  if (category) filters.category = category;
  if (q) filters.title = { $regex: q, $options: 'i' };

  const products = await Product.find(filters).limit(Number(limit));
  res.json(products);
});

// POST /api/products avec image
router.post('/', upload.single('image'), async (req, res) => {
  try {
    const productData = req.body;

    // Ajouter l'URL de l'image Cloudinary si upload
    if (req.file && req.file.path) {
      productData.imageUrl = req.file.path;
    }

    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
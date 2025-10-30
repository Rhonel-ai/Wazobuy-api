const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  buyerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  sellerId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  courierId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', default: null },
  items: [{
    productId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    title: String,
    qty: Number,
    price: Number
  }],
  total: { type: Number, required: true },
  status: { type: String, enum: ['pending','accepted','in_transit','delivered','cancelled'], default: 'pending' },
  pickupLocation: { type: { type: String, enum: ['Point'], default: 'Point' }, coordinates: { type: [Number] } },
  deliveryLocation: { type: { type: String, enum: ['Point'], default: 'Point' }, coordinates: { type: [Number] } },
  createdAt: { type: Date, default: Date.now },
  updatedAt: Date
});

orderSchema.index({ 'pickupLocation': '2dsphere' });
orderSchema.index({ 'deliveryLocation': '2dsphere' });

module.exports = mongoose.model('Order', orderSchema);

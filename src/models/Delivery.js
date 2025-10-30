const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: 'Order', required: true },
  courierId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  status: { type: String, enum: ['assigned','started','arrived','delivered','failed'], default: 'assigned' },
  currentLocation: { type: { type: String, enum: ['Point'], default: 'Point' }, coordinates: { type: [Number] } },
  startedAt: Date,
  deliveredAt: Date
});

deliverySchema.index({ currentLocation: '2dsphere' });

module.exports = mongoose.model('Delivery', deliverySchema);

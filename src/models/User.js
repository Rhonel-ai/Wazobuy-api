const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  role: { type: String, enum: ['buyer','seller','courier','admin'], required: true, index: true },
  name: { type: String, required: true },
  phone: { type: String, required: true, unique: true },
  email: { type: String, unique: true, sparse: true },
  passwordHash: { type: String, required: true },
  isVerified: { type: Boolean, default: false },
  availableToDeliver: { type: Boolean, default: false },
  location: {
    type: { type: String, enum: ['Point'], default: 'Point' },
    coordinates: { type: [Number], default: [0,0] } // [lng, lat]
  },
  vendorInfo: {
    shopName: String,
    shopPhoto: String,
    address: String,
  },
  createdAt: { type: Date, default: Date.now }
});
userSchema.index({ location: '2dsphere' });
module.exports = mongoose.model('User', userSchema);

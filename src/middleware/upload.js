const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');
require('dotenv').config();

// Configurer Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET
});

// Configurer storage
const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: 'wazobuy_products', // dossier Cloudinary
    allowed_formats: ['jpg', 'png', 'jpeg']
  }
});

// Middleware multer
const upload = multer({ storage });

module.exports = upload;

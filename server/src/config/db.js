const mongoose = require('mongoose');

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;
  if(!mongoUri) {
    throw new Error('MONGODB_URI is not set. Add a valid MongoDB Atlas URI in server/.env');
  }

  if(mongoUri.includes('<username>') || mongoUri.includes('<password>') || mongoUri.includes('<cluster-url>') || mongoUri.includes('<db-name>')) {
    throw new Error('MONGODB_URI still contains placeholders. Replace it with your real MongoDB Atlas connection string in server/.env');
  }

  await mongoose.connect(mongoUri);
  console.log('MongoDB connected');
}

module.exports = connectDB;

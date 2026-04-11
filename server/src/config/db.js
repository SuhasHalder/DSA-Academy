const mongoose = require('mongoose');
const { DB_ERROR_CODES, createDbError } = require('./dbErrors');

async function connectDB() {
  const mongoUri = process.env.MONGODB_URI;
  if(!mongoUri) {
    throw createDbError(DB_ERROR_CODES.NOT_CONFIGURED);
  }

  if(mongoUri.includes('<username>') || mongoUri.includes('<password>') || mongoUri.includes('<cluster-url>') || mongoUri.includes('<db-name>')) {
    throw createDbError(DB_ERROR_CODES.PLACEHOLDER_URI);
  }

  try {
    await mongoose.connect(mongoUri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection failed');
    throw createDbError(DB_ERROR_CODES.CONNECTION_FAILED);
  }
}

module.exports = connectDB;

const express = require('express');
const cors = require('cors');
const connectDB = require('../server/src/config/db');
const authRoutes = require('../server/src/routes/authRoutes');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

app.use('/api/auth', authRoutes);

let dbReady = false;
async function ensureDb() {
  if(dbReady) return;
  await connectDB();
  dbReady = true;
}

module.exports = async (req, res) => {
  try {
    await ensureDb();
    return app(req, res);
  } catch (e) {
    return res.status(500).json({ message: e.message || 'Server error' });
  }
};


// /api/index.js
export default function handler(req, res) {
  res.status(200).json({ message: "Hello from Vercel!" });
}
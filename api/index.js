const express = require('express');
const cors = require('cors');
const connectDB = require('../server/src/config/db');
const authRoutes = require('../server/src/routes/authRoutes');
const { DB_ERROR_CODES } = require('../server/src/config/dbErrors');

const app = express();

app.use(cors());
app.use(express.json());

function publicMessageForDbError(code) {
  if(code === DB_ERROR_CODES.NOT_CONFIGURED || code === DB_ERROR_CODES.PLACEHOLDER_URI) {
    return 'We cannot complete this action right now. Please try again later.';
  }
  if(code === DB_ERROR_CODES.CONNECTION_FAILED) {
    return 'Something went wrong on our side. Please try again in a few minutes.';
  }
  return null;
}

let dbReady = false;

async function ensureDb() {
  if(dbReady) return;
  if(!process.env.JWT_SECRET || String(process.env.JWT_SECRET).length < 8) {
    const err = new Error('AUTH_NOT_CONFIGURED');
    err.code = 'AUTH_NOT_CONFIGURED';
    throw err;
  }
  await connectDB();
  dbReady = true;
}

app.get('/api/health', (req, res) => {
  res.json({
    ok: true,
    message: 'Server is running',
    database: dbReady ? 'connected' : 'not_ready'
  });
});

app.use('/api/auth', authRoutes);

module.exports = async (req, res) => {
  try {
    await ensureDb();
    return app(req, res);
  } catch (e) {
    const dbMsg = publicMessageForDbError(e.code);
    if(dbMsg) {
      return res.status(503).json({ message: dbMsg });
    }
    if(e.code === 'AUTH_NOT_CONFIGURED') {
      return res.status(503).json({ message: 'We cannot complete this action right now. Please try again later.' });
    }
    console.error('API error');
    return res.status(500).json({ message: 'Something went wrong. Please try again later.' });
  }
};

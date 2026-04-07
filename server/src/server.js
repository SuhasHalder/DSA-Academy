const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ ok: true, message: 'Server is running' });
});

app.use('/api/auth', authRoutes);

const clientPath = path.resolve(__dirname, '../../client');
app.use(express.static(clientPath));

app.use((req, res) => {
  res.sendFile(path.join(clientPath, 'index.html'));
});

async function startServer() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error(error.message);
    process.exit(1);
  }
}

startServer();

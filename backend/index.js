// backend/index.js
const express = require('express');
const cors = require('cors');
require('dotenv').config(); // loads .env if present

const app = express();

// configuration
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'local';
const DB_URL = process.env.DB_URL || null;

app.use(cors());
app.use(express.json());

// health endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', env: NODE_ENV, timestamp: new Date().toISOString() });
});

// placeholder config (future DB, etc.)
app.get('/api/config', (req, res) => {
  res.json({ db_url: DB_URL });
});

// catch-all 404 for API
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'Not found' });
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});
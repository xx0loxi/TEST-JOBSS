const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'database.json');

// Enable CORS for all origins, including file:/// and GitHub Pages
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use(express.json());

// Load initial state
let state = {};
if (fs.existsSync(DB_FILE)) {
  try {
    state = JSON.parse(fs.readFileSync(DB_FILE, 'utf8'));
  } catch (e) {
    console.error('Error reading database file:', e);
  }
}

// Routes
app.get('/api/state', (req, res) => {
  res.json(state);
});

app.post('/api/state', (req, res) => {
  state = req.body;
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(state, null, 2), 'utf8');
  } catch (e) {
    console.error('Error writing database file:', e);
  }
  res.json({ success: true, message: 'State saved successfully' });
});

app.get('/', (req, res) => {
  res.send('Staff Logic Backend is running!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

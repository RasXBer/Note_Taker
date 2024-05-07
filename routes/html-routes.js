const express = require('express');
const router = express.Router();
const path = require('path');

// Route to serve index.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// Route to serve notes.html
router.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'notes.html'));
});

module.exports = router;

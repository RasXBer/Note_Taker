const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

// Route to get all notes from db.json
router.get('/api/notes', (req, res) => {
  fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    res.json(JSON.parse(data));
  });
});

// Route to add a new note to db.json
router.post('/api/notes', (req, res) => {
  const newNote = req.body;
  fs.readFile(path.join(__dirname, '..', 'db', 'db.json'), 'utf8', (err, data) => {
    if (err) throw err;
    const notes = JSON.parse(data);
    newNote.id = generateUniqueId(); // You need to implement this function to generate a unique ID
    notes.push(newNote);
    fs.writeFile(path.join(__dirname, '..', 'db', 'db.json'), JSON.stringify(notes, null, 2), err => {
      if (err) throw err;
      res.json(newNote);
    });
  });
});

// Function to generate unique ID 
function generateUniqueId() {
  return uuid.v4();
}

module.exports = router;

const fs = require('fs');
const express = require('express');
const path = require('path');
const { v4: uuidv4 } = require('uuid');
const api = require('./public/assets/js/index.js');



const PORT = process.env.PORT || 3005;

const app = express();

app.use(express.json());

app.use('/api', api);

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// HTML route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

// HTML route for base index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
});

// API routes
app.get('/api/notes', (req, res) => {
    const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(notesData);
});

app.post('/api/notes', (req, res) => {
    const newNote = req.body;
    const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
    newNote.id = uuidv4();
    notesData.push(newNote);
    fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
    res.json(newNote);
  });
  






// Listen command for displaying on Port.
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));



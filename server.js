const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
const indexRouter = require('/develop/public/js.index.js');


const app = express();
const PORT = process.env.PORT || 3004;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
app.use('/', indexRouter);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '/develop/public/index.html'));
});

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, '/develop/public/notes.html'));
});

// API route to get all saved notes
app.get('/api/notes', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notesData);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  const newNote = {
    ...req.body,
    id: uuidv4()
  };
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  notesData.push(newNote);
  fs.writeFileSync('./db/db.json', JSON.stringify(notesData));
  res.json(newNote);
});

// API route to delete a note
app.delete('/api/notes/:id', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  const updatedNotesData = notesData.filter(note => note.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotesData));
  res.json(updatedNotesData);
});

app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
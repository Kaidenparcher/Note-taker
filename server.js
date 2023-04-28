const express = require('express');
const path = require('path');
const fs = require('fs');
const { v4: uuidv4 } = require('uuid');
// const indexRouter = require('./public/assets/js/index.js');


const app = express();
const PORT = process.env.PORT || 3015;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));
// app.use('/', indexRouter);


const getNotes = function () {
  const noteData = fs.readFileSync("./db/db.json", "utf8");
  const notesData = JSON.parse(noteData);

  return notesData;
}

app.get('/api/notes', (req, res) => {

  const notesData = getNotes();
  res.json(notesData);

  console.log(`${req.method} Routing to Note Storage`)
  }
  );

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/notes.html'))
});

// Get route for style.css so style will render correctly on the page
app.get("/assets/css/styles.css", (req, res) =>
  res.sendFile(path.join(__dirname, "./public/assets/css/styles.css"))
);

app.get('/notes', (req, res) => {
  res.sendFile(path.join(__dirname, './public/notes.html'));
});

// API route to get all saved notes
app.get('/api/notes', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  res.json(notesData);
});

// API route to save a new note
app.post('/api/notes', (req, res) => {
  console.log(`${req.method} request to add note`);
  const {title, text} = req.body;
  let newNote;
  if (title && text) {
    let newNote = {
    title,
    text,
    id: uuidv4()
  }
  

  fs.readFile('./db/db.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
    } else {
        const notesData = JSON.parse(data);
        notesData.push(newNote);
  
        fs.writeFile('./db/db.json', JSON.stringify(notesData, null, 4),
        (err) =>
        err
        ?console.error(err)
        :console.log('This worked.')
        )}
      })
    }
    res.redirect("/");   
});



// API route to delete a note
app.delete('/api/notes/:id', (req, res) => {
  const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
  const updatedNotesData = notesData.filter(note => note.id !== req.params.id);
  fs.writeFileSync('./db/db.json', JSON.stringify(updatedNotesData));
  res.json(updatedNotesData);
});

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
});


app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
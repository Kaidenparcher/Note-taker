const fs = require('fs');
const express = require('express');
const path = require('path');


const PORT = process.env.PORT || 3000;

const app = express();

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// HTML route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'notes.html'));
});

// HTML route for base index
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Listen command for displaying on Port.
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));

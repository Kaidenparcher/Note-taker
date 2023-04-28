# Note Taking App

## Description 


This is a web-based application built using Node.js and Express framework that allows users to create, save, and delete notes. The application is designed to be simple and easy to use, with a clean and intuitive user interface.

Overview
The Note Taking App consists of a front-end and a back-end. The front-end is implemented using HTML, CSS, and JavaScript, while the back-end is implemented using Node.js and Express framework.

When the user visits the application, they are presented with a landing page that displays a "Get Started" button. When the user clicks on the button, they are taken to the notes page, where they can create, save, and delete notes.

The application uses the uuid package to generate unique ids for each note created. When the user saves a note, the application stores the note in a JSON file on the server. When the user deletes a note, the application removes the note from the JSON file.

Heroku Deployment Url [Heroku Url](https://kp-note-taker.herokuapp.com/).

## Table of Contents 



* [Installation](#installation)
* [Usage](#usage)
* [License](#license)


## Installation

Clone this repository to your local machine.
Run npm install to install the necessary dependencies.

## Usage 

1. Run npm start to start the server.
2. Open your browser and go to http://localhost:3030 to access the application.
3. Click on the "Get Started" button to access the notes page.
4. Click on the "Note Title" and "Note Text" fields to enter a new note.
5. Click on the "Save" icon to save the note.
6. Click on the "Trash" icon to delete the note.

Here is the inital landing page!

![Image of Url landing page](/Images/start.png)


Next is the Notes page.

![Image of notes page](/Images/2.png)

Here shows a note being wrote.

![Image of a note](/Images/3.png)

Lastly here is an example of the note being saved!

![Image of a note saved](/Images/4.png)




## License

This project utilizes the open source MIT license. To find more information, visit this link: [MIT license website](https://opensource.org/license/mit/)


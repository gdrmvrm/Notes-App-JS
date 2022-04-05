const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

notes = new NotesModel();
view = new NotesView(notes);

// console.log("The notes app is running");
// console.log(notes.getNotes());
// console.log(notes.addNote("Buy Milk"), notes.getNotes());
// console.log(notes.reset());

notes.addNote("Buy Milk");
notes.addNote("Say Hello");
view.displayNotes();

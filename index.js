const NotesModel = require("./notesModel");

notes = new NotesModel();

console.log("The notes app is running");
console.log(notes.getNotes());
console.log(notes.addNote("Buy Milk"), notes.getNotes());
console.log(notes.reset());

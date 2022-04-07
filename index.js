const NotesApi = require("./notesApi");
const NotesModel = require("./notesModel");
const NotesView = require("./notesView");

const api = new NotesApi();
const model = new NotesModel();
const view = new NotesView(model, api);

// console.log("The notes app is running");
// console.log(notes.getNotes());
// console.log(notes.addNote("Buy Milk"), notes.getNotes());
// console.log(notes.reset());

// notes.addNote("Buy Milk");
// notes.addNote("Say Hello");

api.loadNotes((notes) => {
  console.log(notes);
  model.setNotes(notes);
  view.displayNotes();
});

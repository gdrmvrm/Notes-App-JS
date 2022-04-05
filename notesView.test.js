/**
 * @jest-environment jsdom
 */
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const fs = require("fs");

describe("Page View", () => {
  it("displays 2 notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
  });
});

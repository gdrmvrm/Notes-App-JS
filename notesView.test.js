/**
 * @jest-environment jsdom
 */
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const fs = require("fs");

describe("NotesView", () => {
  it("displays 2 notes", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  it("adds a new note", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    const buttonEl = document.querySelector("#add-notes-button");
    const inputEl = document.querySelector("#note-input");
    inputEl.value = "Hello there!";
    buttonEl.click();

    buttonEl.class = "note";
    expect(document.querySelectorAll("div.note").length).toEqual(1);
    expect(document.querySelectorAll("div.note")[0].innerText).toEqual(
      "Hello there!"
    );
  });

  it("removes previous notes before a new note is displayed", () => {
    document.body.innerHTML = fs.readFileSync("./index.html");

    const model = new NotesModel();
    const view = new NotesView(model);
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});

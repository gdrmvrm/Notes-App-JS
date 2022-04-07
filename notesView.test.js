/**
 * @jest-environment jsdom
 */
const NotesApi = require("./notesApi");
const NotesView = require("./notesView");
const NotesModel = require("./notesModel");
const fs = require("fs");

let model;
let view;
beforeEach(() => {
  document.body.innerHTML = fs.readFileSync("./index.html");
  model = new NotesModel();
  const fakeApi = {
    createNote: (note, callback) => {
      "Test";
    },
  };
  view = new NotesView(model, fakeApi);
});

describe("NotesView", () => {
  it("displays 2 notes", () => {
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();

    expect(document.querySelectorAll("div.note").length).toBe(2);
  });

  it("adds a new note", () => {
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
    model.addNote("Buy milk");
    model.addNote("Go to the gym");
    view.displayNotes();
    view.displayNotes();
    expect(document.querySelectorAll("div.note").length).toEqual(2);
  });
});

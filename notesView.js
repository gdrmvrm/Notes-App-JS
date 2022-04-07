class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");
    this.buttonEl = document.querySelector("#add-notes-button");
    this.inputEl = document.querySelector("#note-input");

    this.buttonEl.addEventListener("click", () => {
      const newNote = this.inputEl.value;
      this.addNewNotes(newNote);
    });
  }

  displayNotes() {
    const theNotes = this.model.getNotes();

    theNotes.forEach((note) => {
      const noteEl = document.createElement("div");
      noteEl.innerText = note;
      noteEl.className = "note";
      this.mainContainer.append(noteEl);
    });
  }

  addNewNotes(newNote) {
    this.model.addNote(newNote);
    this.displayNotes();
  }
}

module.exports = NotesView;

class NotesView {
  constructor(model) {
    this.model = model;
    this.mainContainer = document.querySelector("#main-container");
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
}

module.exports = NotesView;

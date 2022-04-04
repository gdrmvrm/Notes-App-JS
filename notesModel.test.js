const NotesModel = require("./notesModel");

describe("Notes Model", () => {
  describe("gets Notes class", () => {
    it("starts with no notes", () => {
      const model = new NotesModel();
      expect(model.getNotes()).toEqual([]);
    });

    it("adds notes", () => {
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.addNote("Go to the gym");
      expect(model.getNotes()).toEqual(["Buy milk", "Go to the gym"]);
    });

    it("reset the list of notes", () => {});
      const model = new NotesModel();
      model.addNote("Buy milk");
      model.reset();
      expect(model.getNotes()).toEqual([]);
    });
  });
});

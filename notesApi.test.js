const NotesApi = require("./notesApi");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("Notes App class", () => {
  it("calls fetch and loads notes info", async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(
      JSON.stringify(["This note is coming from the server"])
    );

    api.loadNotes((notes) => {
      expect(notes).toEqual(["This note is coming from the server"]);
    });
  });
});

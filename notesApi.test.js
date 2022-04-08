const NotesApi = require("./notesApi");

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require("jest-fetch-mock").enableMocks();

describe("Notes API class", () => {
  it("calls fetch and loads notes info", async () => {
    const api = new NotesApi();
    fetch.mockResponseOnce(
      JSON.stringify({ 0: ["This note is coming from the server"] })
    );

    api.loadNotes((notes) => {
      expect(notes[0]).toEqual(["This note is coming from the server"]);
    });
  });

  it("posts a note to the server", () => {
    const api = new NotesApi();

    fetch.mockResponseOnce(
      JSON.stringify({
        0: "Hello!",
      })
    );

    api.createNote("Hello!", (response) => {
      expect(response[0]).toEqual("Hello!");
    });
  });
});

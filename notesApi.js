class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callback(data);
      });
  }

  createNote(note, callback) {
    const data = { content: note };
    fetch("http://localhost:3000/notes", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((response) => callback(response.json()))
      .then((data) => {
        console.log("Success:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }
}

module.exports = NotesApi;

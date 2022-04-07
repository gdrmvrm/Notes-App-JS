class NotesApi {
  loadNotes(callback) {
    fetch("http://localhost:3000/notes")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        callback(data);
      });
  }
}

module.exports = NotesApi;

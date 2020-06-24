function newHTML() {
  var noteList = new NoteList();

  var noteController = new NoteController(noteList)
    noteController.noteToPage()

    assert.isTrue(document.getElementById('app').innerHTML === (this.noteListViews.view()))
}

newHTML()

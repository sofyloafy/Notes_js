(function(exports) {
  function NoteController(noteList){
  this.noteList = noteList
  }
  console.log(noteList.returnList())

  NoteController.prototype.noteToPage = function() {
    noteList.createNote("Favourite pie: pecan");
    this.noteListView = new NoteListViews(this.noteList)
    document.getElementById('app').innerHTML = (`<ul><li><div>Favourite pie: pecan</div></li></ul>`)
}
console.log("im here")

exports.NoteController = NoteController
})(this);
(function(exports) {
  function NoteController(noteList)
  this.NoteList.returnList("Favourite pie: pecan")
console.log(NoteList.returnList())

  NoteController.prototype.NoteToPage = function() {
    document.getElementById('app').innerHTML = (this.noteListViews.view())
}


exports.NoteController = NoteController
})(this);
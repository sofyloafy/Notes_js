"use strict";

(function(exports) {

  function NoteController(noteList) {
  this.noteList = noteList;
  //this.noteList.createNote("Favourite pie: pecan");
  }

  NoteController.prototype.noteToPage = function() {
    var noteListViews = new NoteListViews(this.noteList)
    var item = noteListViews.view()
    console.log(item)
    document.getElementById("app").innerHTML = (item);
}

exports.NoteController = NoteController
})(this);


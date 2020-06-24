"use strict";

(function(exports) {

  function NoteController(noteList) {
  this.noteList = noteList;
  this.noteList.createNote("Favourite pie: pecan");
  console.log(this.noteList.returnList()[0].text)


  }

  NoteController.prototype.noteToPage = function() {
    noteListViews = new NoteListViews(this.noteList)
    console.log(noteListViews.view())
    document.getElementById("app").innerHTML = this.noteListView.view();
}

exports.NoteController = NoteController
})(this);


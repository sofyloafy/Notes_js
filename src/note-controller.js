"use strict";

(function(exports) {

  function NoteController(noteList) {
  this.noteList = noteList;
  }

  NoteController.prototype.noteToPage = function() {
    var noteListViews = new NoteListViews(this.noteList)
    var item = noteListViews.view()
    document.getElementById("app").innerHTML = (item);
  }

  makeUrlChangeShowNoteForCurrentPage();

function makeUrlChangeShowNoteForCurrentPage() {
  window.addEventListener("hashchange", showNoteForCurrentPage);
};

function showNoteForCurrentPage() {
  showNote(getIDFromUrl(window.location));
};

function getIDFromUrl(location) {
  return location.hash.split("#")[0];
};

function showNote() {
  var note = new Note ("My name is Sophie")
  console.log(note)
  var text = new StringHTML(note).returnHTML()
  console.log(text)
  document
    .getElementById("app")
    .innerHTML =  text;
};

exports.NoteController = NoteController
})(this);




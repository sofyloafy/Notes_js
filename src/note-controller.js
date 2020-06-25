"use strict";

const { Note } = require("./note-model");
const { StringHTML } = require("./single-note-view");
const { NoteListViews } = require("./note-list-view");

(function(exports) {

  function NoteController(noteList) {
  this.noteList = noteList;
  }

  // NoteController.prototype.noteToPage = function() {
  //   var noteListViews = new NoteListViews(this.noteList)
  //   var item = noteListViews.view()

  //   console.log(item)
  //   document.getElementById("app").innerHTML = (item);
  // }


  makeUrlChangeShowNoteForCurrentPage();

NoteController.prototype.makeUrlChangeShowNoteForCurrentPage = function() {
  window.addEventListener("hashchange", this.returnViewForSingleNote);
};

// function showNoteForCurrentPage() {
//   showNote(getIDFromUrl(window.location));
// };
NoteController.prototype.returnListOfNotesView = function {
  return new NoteListViews(this.noteList)
}

NoteController.prototype.returnViewForSingleNote = function () {
  return new StringHTML(this.returnSingleNote)
}

NoteController.prototype.returnSingleNote = function() {
  var singleNote = this.noteList.returnList().filter(element => {
    return element.id.toString() === this.getIDFromUrl(window.location);
  });
  return singleNote
}

NoteController.prototype.getIDFromUrl = function(location) {
  return location.hash.split("#")[1];
};

function showNote(note) {
  this.makeUrlChangeShowNoteForCurrentPage()
  // var note = new Note ("My name is Sophie")
  // console.log(note)
  // var text = new StringHTML(note).returnHTML()
  // console.log(text)
  console.log(NoteController.noteList)
  document.getElementById('app').innerHTML = this.returnViewForSingleNote().returnHTML()
};

exports.NoteController = NoteController
})(this);





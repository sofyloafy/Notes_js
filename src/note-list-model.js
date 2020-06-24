"use strict";

(function (exports) {
  function NoteList() {
    this.list = []
    };

    NoteList.prototype.createNote = function(text) {
      var note = new Note(text);
      this.list.push(note)
    };

  NoteList.prototype.returnList = function() {
    return this.list;
  };

  exports.NoteList = NoteList
})(this);
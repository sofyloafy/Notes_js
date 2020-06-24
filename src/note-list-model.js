"use strict";

(function (exports) {
  function NoteList() {
    this.list = []
    };

    NoteList.prototype.createNote = function(text) {
      this.list.push(new Note(text))
    };

  NoteList.prototype.returnList = function(text) {
    return this.list;
  };

  exports.NoteList = NoteList
})(this);
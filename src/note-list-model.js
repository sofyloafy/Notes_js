"use strict";

(function (exports) {
  function NoteList() {
    this.list = []
    this.id = 0;
    };

    NoteList.prototype.createNote = function(text) {
      var id = this.id
      var note = new Note(text, id);
      this.list.push(note)
      console.log(this.id)
      this.increaseId();
    };

  NoteList.prototype.returnList = function() {
    return this.list;
  };

  NoteList.prototype.increaseId = function() {
    this.id ++
  };

  exports.NoteList = NoteList
})(this);
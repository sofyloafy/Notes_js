"use strict";

(function (exports) {
  function NoteList(text) {
    this.text = text
    this.list = []
    };

  NoteList.prototype.returnList = function() {
    this.list.push(this.text)
    return this.list;
  };

  exports.NoteList = NoteList
})(this);
"use strict";

(function (exports) {
  function NoteList(text) {
    this.text = text
    this.list = []
    };

  NoteList.prototype.returnList = function(text) {
    this.list.push(text)
    return this.list;
  };

  exports.NoteList = NoteList
})(this);
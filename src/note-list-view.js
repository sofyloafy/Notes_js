"use strict";

(function (exports) {
  function NoteListViews(list, text) {
    this.text = text
    this.list = list
    };

  NoteListViews.prototype.view = function() {
    return `<ul><li><div> ${this.text} </div></li></ul>`;
  };

  exports.NoteListViews = NoteListViews
})(this);
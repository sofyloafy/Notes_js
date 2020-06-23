"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.list = list
    };

  NoteListViews.prototype.view = function() {
    var array = this.list.text
    console.log(array)
    if(array.length < 1) {
      throw new Error ("Notes list empty")
    } else {
      return `<ul><li><div>${array}</div></li></ul>`
    }
  };

  exports.NoteListViews = NoteListViews
})(this);
"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.NoteList = list
    };

  NoteListViews.prototype.view = function() {
    var array = this.NoteList.list
    if(array.length < 1) {
      throw new Error ("Notes list empty")
    } else {
      return "<ul><li><div>" + array.join("</div></li><li><div>") + "</div></li></ul>"
    }
  };

  exports.NoteListViews = NoteListViews
})(this);
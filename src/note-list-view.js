"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.list = list
    };

  NoteListViews.prototype.view = function() {
    var note = this.list.returnList()
    var string = "<ul>"
    note.forEach(element => {
    string += "<li><div>" + element.returnText().slice(0,20) + "</div></li>"
  });
  return string += "</ul>"
}

  exports.NoteListViews = NoteListViews
})(this);


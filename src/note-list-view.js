"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.list = list
    };

  NoteListViews.prototype.view = function() {
    var note = this.list.returnList()
    console.log(note)
    var string = "<ul>"
    note.forEach(element => {
    string += "<li><div>" + element.returnText() + "</div></li>"
  });
  return string += "</ul>"
}

  exports.NoteListViews = NoteListViews
})(this);


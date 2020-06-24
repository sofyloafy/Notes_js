"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.list = list
    console.log(this.list)
    };

  NoteListViews.prototype.view = function() {
    var note = this.list.returnList()
    var array = []
      note.forEach(note => array.push(`<ul><li><div>${note.text}</div></li></ul>`))
      console.log(note)
      console.log(note[0].text)
      console.log(array)
    return array.join('')
  };

  exports.NoteListViews = NoteListViews
})(this);
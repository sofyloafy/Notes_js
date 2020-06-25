'use strict';

(function (exports) {
  function StringHTML(note) {
    this.note = note
    };

  StringHTML.prototype.returnHTML = function() {
    return `<div>${this.note.returnText()}</div>`;
  };

  exports.StringHTML = StringHTML
})(this);
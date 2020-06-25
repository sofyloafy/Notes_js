'use strict';

(function (exports) {
  function StringHTML(note) {
    this.note = note
    console.log(this.note)
    };

  StringHTML.prototype.returnHTML = function() {
    console.log(this.note)
    return `<div>${this.note}</div>`;
  };

  exports.StringHTML = StringHTML
})(this);
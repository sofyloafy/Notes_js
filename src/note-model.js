"use strict";
// what is a module pattern?

// what is the constructer/ prototype pattern needed for this function?

// what the function will do:

//Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
//Stores the text in a text property on the note.
//Has a method that will return the note text.

(function (exports) {
  function Note(text,id) {
    this.text = text
    this.id = id
    };

  Note.prototype.returnText = function() {
    return this.text;
  };

  exports.Note = Note
})(this);
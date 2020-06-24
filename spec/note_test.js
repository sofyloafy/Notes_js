"use strict";

(function(exports) {
  function testReturnsText() {
    var note = new Note("I love JS");
    assert.isTrue(note.returnText() === "I love JS")
  };

  testReturnsText();
})(this);
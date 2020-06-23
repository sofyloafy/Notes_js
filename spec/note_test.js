"use strict";

(function(exports) {
  function testReturnsText() {
    var note = new Note("I love JS");
    if(note.returnText() !== "I love JS") {
      throw new Error("Error");
    }
    else {
      console.log("All good ✅")
  }
  };

  testReturnsText();
})(this);
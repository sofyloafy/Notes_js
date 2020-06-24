"use strict";

(function(exports) {
  function testReturnsList() {
    var list = new NoteList();
    list.createNote("I love JS")
    assert.isTrue(list.returnList()[0].returnText() === "I love JS")
  }

  testReturnsList();
})(this);
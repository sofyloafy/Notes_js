"use strict";

(function(exports) {
  var list = new NoteList();

  function testId() {
    assert.isTrue(list.id === 0)
  }

  testId();

  function testReturnsList() {
    list.createNote("I love JS")
    assert.isTrue(list.returnList()[0].returnText() === "I love JS")
    console.log(list.id)
    assert.isTrue(list.id === 1)

  }

  testReturnsList();
  
})(this);
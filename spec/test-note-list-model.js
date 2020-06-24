// "use strict";

(function(exports) {
  function testReturnsList() {
    var list = new NoteList();
    list.createNote("I love JS")
    console.log(list.list)
    assert.isTrue(list.returnList()[0].text === "I love JS")
  }

  testReturnsList();
})(this);
// "use strict";

(function(exports) {
  function testReturnsList() {
    var list = new NoteList();
    assert.isTrue(list.returnList("I love JS")[0] === "I love JS")
  }

  testReturnsList();
})(this);
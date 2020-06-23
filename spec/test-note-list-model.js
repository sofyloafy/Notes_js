"use strict";

(function(exports) {
  function testReturnsList() {
    var list = new NoteList("I love JS");
    if(list.returnList()[0] !== "I love JS") {
      throw new Error("Error");
    }
    else {
      console.log("All good ✅")
  }
  };

  testReturnsList();
})(this);
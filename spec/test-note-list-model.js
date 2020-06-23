"use strict";

(function(exports) {
  function testReturnsList() {
    var list = new NoteList();
    if(list.returnList("I love JS")[0] !== "I love JS") {
      throw new Error("Error");
    }
    else {
      console.log("All good ✅")
  }
  };

  testReturnsList();
})(this);
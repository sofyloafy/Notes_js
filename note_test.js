"use strict";

(function(exports) {
  function undefinedmethodtester() {
    var note = new Note();

    // assert.isTrue(note.display === "undefined"); needs fixing 
    if (typeof note.display === "undefined") { 
      throw new Error("Unfedined Method")
    };
  };
    undefinedmethodtester();
})(this);


(function(exports) {
  function objectHasOneArgument(text) {
    var note = new Note(text);

    if ( text === "undefined") { 
      throw new Error("Unfedined argument")
    };
  };
    objectHasOneArgument();
})(this);


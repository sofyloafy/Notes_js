"use strict";


(function(exports){
var assert = {
  isTrue: function (assertionToCheck) {
      if (!assertionToCheck) {
          throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      else {
          console.log("All good ✅")
      }
  }
};
})(this);

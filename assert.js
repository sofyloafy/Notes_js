"use strict";
// var assert = {
//     isTrue: function(assertionToCheck) {
//       if (!assertionToCheck) {
//         throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
//       }
//     };
//   };
//   Now our test beco
(function(exports){
  var assert = {
    isTrue: function(assertionToCheck) {
      if (!assertionToCheck) {
          throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
    }
  }
})(this);
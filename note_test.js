// JS it function for tests:


// (function(){
//   'use strict';

  
//     test function
//     @param {string} desc
//     @param {function} fn
//   function it(desc, fn) {
//     try {
//       fn();
//       console.log('\x1b[32m%s\x1b[0m', '\u2714 ' + desc);
//     } catch (error) {
//       console.log('\n');
//       console.log('\x1b[31m%s\x1b[0m', '\u2718 ' + desc);
//       console.error(error);
//     }
//   }
// })();


// // assert function:

//  function assert(isTrue) {
//     if (!isTrue) {
//       throw new Error();
//     }
//   }
  

// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();

//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };

//   testCircleRadiusDefaultsTo10();
// })(this);

(function(exports) {
  function undefinedmethodtester() {//name of the test() {
    var note = new Note();

    // the condition - if/else, something else
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


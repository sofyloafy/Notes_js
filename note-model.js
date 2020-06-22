// what is a module pattern?

// what is the constructer/ prototype pattern needed for this function?

// what the function will do:

//Takes the text of a note upon instantiation e.g. My favourite language is JavaScript.
//Stores the text in a text property on the note.
//Has a method that will return the note text.

class Note { 
  constructor(text) {
    this.text = text;
  }
  display(){
    console.log(this.text)
  };
};

// EL6
// (function(exports) {
// class Circle {
//     constructor() {
//       this.radius = 10;
//     }
//   }
// ;

//   exports.Circle = Circle;
// })(this);


// EL5 

// (function(exports) {
//   function Circle() {
//     this.radius = 10;
//   };

//   exports.Circle = Circle;
// })(this);


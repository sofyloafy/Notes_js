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


// class Person {
//   constructor(first, last, age, eye) {
//     this.firstName = first;
//     this.lastName = last;
//     this.age = age;
//     this.eyeColor = eye;
//   }
// }


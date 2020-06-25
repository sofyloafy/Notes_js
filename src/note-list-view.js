"use strict";

(function (exports) {
  function NoteListViews(list) {
    this.list = list
    };

  NoteListViews.prototype.view = function() {
    var note = this.list.returnList()
    var string = "<ul>"
    note.forEach(element => {
    string += `<a href= #${element.id}> <li><div> ${element.returnText().slice(0,20)} </div></li> </a>`
    console.log(string)
  });
  return (string += "</ul>")

}

  exports.NoteListViews = NoteListViews
})(this);


// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="utf-8">
//     <title>Frontend, single page app</title>
//   </head>

//   <body>
//     <a href="#tiger">Tiger</a> |
//     <a href="#lion">Lion</a> |
//     <a href="#cheetah">Cheetah</a> |
//     <a href="#leopard">Leopard</a>

//     <div id="animal"></div>

//     <script>
//       makeUrlChangeShowAnimalForCurrentPage();

//       function makeUrlChangeShowAnimalForCurrentPage() {
//         window.addEventListener("hashchange", showAnimalForCurrentPage);
//       };

//       function showAnimalForCurrentPage() {
//         showAnimal(getAnimalFromUrl(window.location));
//       };

//       function getAnimalFromUrl(location) {
//         return location.hash.split("#")[1];
//       };

//       function showAnimal(animal) {
//         document
//           .getElementById("animal")
//           .innerHTML = animal;
//       };
//     </script>
//   </body>
// </html>

'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.createNote("Hello, my name is Sophie")
    console.log(list.returnList()[0].id)
    var id = list.returnList()[0].id 
   
    // console.log(id)
    assert.isTrue(listView.view() === `<ul><a href= #${id}> <li><div> Hello, my name is So </div></li> </a></ul>`)
    };
listViews()
})(this);



// NoteListViews.prototype.view = function() {
//     var note = this.list.returnList()
//     var string = "<ul>"
//     note.forEach(element => {
//     string += `<a href= #${element.id}> <li><div> ${element.returnText().slice(0,20)} </div></li> </a>`
//     // console.log(string)
//   });
//   return string += "</ul>"
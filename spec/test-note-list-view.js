'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.createNote("Hello, my name is Sophie")
    console.log(list.returnList()[0].id)
    var id = list.returnList()[0].id 
    assert.isTrue(listView.view() === `<ul><a href= #${id}> <li><div> Hello, my name is So </div></li> </a></ul>`)
    };
listViews()
})(this);

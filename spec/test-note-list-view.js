'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.createNote("Hello")
    console.log(list.returnList())
    console.log(listView.view())
    assert.isTrue(listView.view() === `<ul><li><div>Hello</div></li></ul>`)
    };
listViews()
})(this);

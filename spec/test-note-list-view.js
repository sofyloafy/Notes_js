'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.createNote("Hello, my name is Sophie")
    assert.isTrue(listView.view() === `<ul><li><div>Hello, my name is So</div></li></ul>`)
    };
listViews()
})(this);


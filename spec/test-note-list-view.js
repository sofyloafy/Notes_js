'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.returnList("Hello")
    assert.isTrue(listView.view() === `<ul><li><div>Hello</div></li></ul>`)
    };
listViews()
})(this);



(function (exports){
    function listMultipleViews(){
    list.returnList("To buy: milk");
    list.returnList("To do: buy milk");
    assert.isTrue(listView.view() === `<ul><li><div>Hello</div></li><li><div>To buy: milk</div></li><li><div>To do: buy milk</div></li></ul>`)
    };

listMultipleViews()
})(this);

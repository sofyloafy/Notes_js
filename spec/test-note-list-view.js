'use strict';
var list = new NoteList("To buy: milk");
var listView = new NoteListViews(list.list,list.text);
(function (exports){
    function listViews(text){
    console.log(list.returnList())
    console.log(listView.view());
    if(listView.view() === `<ul><li><div>${text}</div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good :white_tick:")
    }
    };
listViews()
})(this);

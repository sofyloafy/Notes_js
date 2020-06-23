'use strict';
var list = new NoteList("To buy: milk");
var listView = new NoteListViews(list);

// if(listView.list.length !== 0) {
//     throw new Error('Nothing here!');
//     }

(function (exports){
    function listViews(text){
    console.log(list.returnList())
    console.log(listView.view());
    if(listView.view() === `<ul><li><div>${text}</div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good ✅")
    }
    };
listViews()
})(this);

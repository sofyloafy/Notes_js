'use strict';


(function (exports){
    function listViews(text){
    var list = new NoteList();
    var listView = new NoteListViews(list.list,list.text);
    if(listView.view() === `<ul><li><div>${text}</div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good ✅")
    }

    };

listViews("To buy: milk")
})(this);
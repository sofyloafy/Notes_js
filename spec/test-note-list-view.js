'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.returnList("Hello")
    console.log(list.list)
    console.log(listView.view());
    if(listView.view() !== `<ul><li><div>Hello</div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good ✅")
    }
    };
listViews()
})(this);



(function (exports){
    function listMultipleViews(){
    list.returnList("To buy: milk");
    list.returnList("To do: buy milk");
    console.log(list.returnList())
    console.log(listView.view());
    if(listView.view() !== `<ul><li><div>Hello</div></li><li><div>To buy: milk</div></li><li><div>To do: buy milk</div></li><li><div></div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good ✅")
    }
    };
listMultipleViews()
})(this);

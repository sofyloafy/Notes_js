'use strict';
var list = new NoteList();
var listView = new NoteListViews(list);

(function (exports){
    function listViews(){
    list.returnList("Hello")
    console.log(list.list)
    console.log(listView.view());
    if(listView.view() === `<ul><li><div>Hello</div></li></ul>`) {
        throw new Error("Error");
    }
    else {
        console.log("All good ✅")
    }
    };
listViews()
})(this);



// (function (exports){
//     function listMultipleViews(text){
//     var list = new NoteList("To buy: milk");
//     var list = new NoteList("To do: buy milk");
//     console.log(list.returnList())
//     console.log(listView.view());
//     if(listView.view() === `<ul><li><div>${text}</div></li></ul>`) {
//         throw new Error("Error");
//     }
//     else {
//         console.log("All good ✅")
//     }
//     };
// listMultipleViews()
// })(this);

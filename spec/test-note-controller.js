(function() {

function testController() {
  var noteList = new NoteList()
  noteList.createNote("Hello")
  var noteController = new NoteController(noteList)
  console.log(noteList.returnList())
  noteController.noteToPage()
  assert.isTrue(document.getElementById('app').innerHTML === `<ul><li><div>Hello</div></li><li><div>Favourite pie: pecan</div></li></ul>`)
}

testController();

})();

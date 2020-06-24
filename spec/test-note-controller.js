(function() {

function testController() {
  var noteList = new NoteList();
  var noteController = new NoteController(noteList)
  noteList.createNote("Hello")
  console.log(noteList.returnList())
  // noteController.noteToPage()
  assert.isTrue(document.getElementById('app').innerHTML === `<ul><li><div>Hello</div></li></ul>`)
}

testController();

})();

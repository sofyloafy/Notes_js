(function() {

function testController() {
  var noteList = new NoteList()
  noteList.createNote("Hello")
  var id = noteList.returnList()
  var noteController = new NoteController(noteList)
  noteController.noteToPage()
  assert.isTrue(document.getElementById('app').innerHTML === '<ul><a href="#0"> <li><div> Hello </div></li> </a></ul>')
}

testController();

})();


function notelistStoresNoteInList() {
  var notelist = new Notelist();
  notelist.saveNoteToList('hi', 'this is a test');
  notelist.saveNoteToList('hi', 'this is another test');
  console.log(notelist.showAllNotes());
  assert.toContain(notelist.showAllNotes(), 'hi: this is a test');
}

notelistStoresNoteInList();

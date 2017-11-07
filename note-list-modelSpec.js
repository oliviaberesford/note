function notelistStoresNoteInList() {
  var notelist = new Notelist();
  notelist.saveNoteToList('hi', 'this is a test');
  notelist.saveNoteToList('hi', 'this is another test');
  assert.toContain(notelist.list, 'hi', 'this is a test');
}

notelistStoresNoteInList();

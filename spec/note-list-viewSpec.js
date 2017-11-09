function listShowAllNotes() {

  var notelistView = new NotelistView();
  notelistView.notelist.saveNoteToList('hi', 'this is a test');
  notelistView.notelist.saveNoteToList('test', 'this is another test');
  assert.toContain(notelistView.showAllNotes(), "hi: this is a test,test: this is another test");
}

listShowAllNotes();

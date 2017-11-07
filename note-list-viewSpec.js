function listShowAllNotes() {

  var notelistView = new NotelistView();

  notelistView.noteList.saveNoteToList('hi', 'this is a test');

  notelistView.noteList.saveNoteToList('test', 'this is another test');

  assert.toEqual(notelistView.showAllNotes(), "<ul><li><div>hi: this is a test</div></li><li><div>test: this is another test</div></li></ul>");

}

listShowAllNotes();

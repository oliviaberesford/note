// function noteListInstantiatesWithListProperty() {
//   var notelist = new Notelist();
//   console.log(notelist._list);
//   assert.toEqual(notelist._list, []);
// }
//
// noteListInstantiatesWithListProperty();
//
function notelistStoresNoteInList() {
  var notelist = new Notelist();
  notelist.saveNoteToList('hi');
  assert.toContain(note._list == 'hi');
}

notelistStoresNoteInList();
//
// function noteListshowsList() {
//   var note = new Note('Hi');
//   assert.toEqual(note.showtext(), 'Hi');
// }
//
// noteListshowsList();



function noteInstantiatesWithTextProperty() {
  var note = new Note('Hi', 'this is a test');
  assert.isTrue(note.text === 'this is a test');
}

noteInstantiatesWithTextProperty();

function showsnotetext() {
  var note = new Note('Hi', 'this is a test');
  assert.toEqual(note.showtext(), 'this is a test');
}

showsnotetext();

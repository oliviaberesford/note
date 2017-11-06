// var note = require('./note-model.js');

function noteInstantiatesWithTextProperty() {
  var note = new Note('Hi');
  assert.isTrue(note._text === 'Hi');
}

noteInstantiatesWithTextProperty();

function showsnotetext() {
  var note = new Note('Hi');
  assert.toEqual(note.showtext(),'Hi');
}

showsnotetext();

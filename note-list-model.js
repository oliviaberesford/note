(function(exports){
  function Notelist() {
  this.list = [];
  this.result = [];
}

Notelist.prototype.saveNoteToList = function(title, text) {
  this.list.push(new Note(title, text));
};

Notelist.prototype.showAllNotes = function() {
    this.list.forEach(function(note) {
      stuff = note.title + ': ' + note.text;
  });
  this.result.push(stuff);
  return this.result;
};


exports.Notelist = Notelist;
})(this);

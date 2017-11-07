(function(exports){
  function Notelist() {
  this.list = [];
}

Notelist.prototype.saveNoteToList = function(title, text) {
  note = new Note(title, text);
  this.list.push(title + ': ' + text);
};

Notelist.prototype.showAllNotes = function() {
    // this.list.forEach(function(note) {
    // return note;
    return this.list;
  // });
};

exports.Notelist = Notelist;
})(this);

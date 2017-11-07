(function(exports){
  function Notelist() {
  this.list = [];
}

Notelist.prototype.saveNoteToList = function(text) {
  note = new Note(text);
  this.list.push(note);
};

Notelist.prototype.showAllNotes = function() {
  this.list.forEach(function(note) {
    // return note;
    console.log(note);
  });
};
exports.Notelist = Notelist;
})(this);

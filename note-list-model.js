(function(exports){
  function Notelist() {
  this._list = [];
}

Notelist.prototype.saveNoteToList = function(text) {
  note = new Note(text);
  this._list.push(note);
};
//
// Notelist.prototype.showAllNotes = function() {
//   this.list.forEach(function(note) {
//     return note;
//   });
// };

exports.Notelist = Notelist;
})(this);

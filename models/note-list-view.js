(function(exports) {
  function NotelistView() {
    this.notelist = new Notelist();
    this.result = [];
  }

  NotelistView.prototype.showAllNotes = function() {
    var self = this;
    this.notelist.list.forEach(function(note) {
      self.result.push(note.title + ': ' + note.text);
    });
    return this.result;
  };

  exports.NotelistView = NotelistView;
})(this);

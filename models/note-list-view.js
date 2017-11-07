(function(exports) {
  function NotelistView() {
    this.noteList = new Notelist();
    this.result = [];
  }

  NotelistView.prototype.showAllNotes = function() {

var self = this;
    this.noteList.list.forEach(function(note) {

      self.result.push(note.title + ': ' + note.text);

    });

 return this.result;
  };

  exports.NotelistView = NotelistView;

})(this);

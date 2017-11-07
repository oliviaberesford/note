(function(exports) {
  function Notelist() {
    this.list = [];
  }

  Notelist.prototype.saveNoteToList = function(title, text) {
    this.list.push(new Note(title, text));
  };

  exports.Notelist = Notelist;
})(this);

window.onload = function() {
  // var element = document.getElementById("app").innerHTML = 'Howdy';
  // console.log(element);
  (function(exports) {
    function NoteController() {
      this.view = new NotelistView();
    }

    NoteController.prototype.addNote = function(title, text) {
      this.view.noteList.saveNoteToList(title, text);
    };

    NoteController.prototype.createsView = function() {
      return this.view.showAllNotes();
    };
    exports.NoteController = NoteController;
  })(this);


};

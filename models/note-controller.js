window.onload = function() {
  // var element = document.getElementById("app").innerHTML = 'Howdy';
  // console.log(element);
  (function(exports) {
    function NoteController() {
      this.view = new NotelistView();
    }

    var listed = document.getElementById('list-of-notes');
    var title = document.getElementById('note-title').value;
    var text = document.getElementById('note-text').value;

    NoteController.prototype.addNote = function() {
      this.view.noteList.saveNoteToList(title, text);
    };

    NoteController.prototype.listener = function() {
      self = this;
      function createsView(){
        listed.textContent = self.view.showAllNotes();
        console.log(self.view);
      }
      var button = document.getElementById('saveNote');
      button.addEventListener('click', function(event){
        event.preventDefault();
        createsView();
      }, false);
    };

      exports.NoteController = NoteController;

      control = new NoteController();
      control.addNote(title, text);
      control.listener();

  })(this);

};

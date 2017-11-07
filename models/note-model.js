(function(exports){
  function Note(title, text) {
  this.title = title;
  this.text = text;
}

Note.prototype.showtext = function () {
  return this.text;
};

exports.Note = Note;
})(this);

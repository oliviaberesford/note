// (function(exports){
  function Note(text) {
  this._text = text;
}

Note.prototype.showtext = function () {
  return this._text;
};
//
// exports.Note = Note;
// })(this);

// var note = require('./note-model.js');

function noteInstantiatesWithTextProperty() {
  var note = new Note('Hi');
  assert.isTrue(note._text === 'Hi');
}

noteInstantiatesWithTextProperty();

function showsnotetext() {
  var note = new Note('Hi');
  assert.toEqual(note.showtext(),'Hi');
}

showsnotetext();


//
//
//
//
//
//
// (function(exports) {
//   function testCircleRadiusDefaultsTo10() {
//     var circle = new Circle();
//
//     if (circle.radius !== 10) {
//       throw new Error("Circle size is not 10");
//     }
//   };
//
//   testCircleRadiusDefaultsTo10();
// })(this);
//
// (function(exports){
//
// })(this);

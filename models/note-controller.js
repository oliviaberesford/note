window.onload = function() {
  // function getThatThing(thing) {
  //   var elem = document.getElementById('app').textContent;
  //   return elem
  // }
  function greetingChange() {
    return document.getElementById("app").innerHTML = "Howdy";
  }
  console.log(greetingChange());
};

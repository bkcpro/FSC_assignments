//Start of an IFFE

(function (window){
  var speakWord = "Good Bye";

  var byeSpeaker = {};

  byeSpeaker.speak = function (name){
    console.log(speakWord + " " + name);
  };

  function speak(name) {
    console.log(speakWord + " " + name);
  }

  window.byeSpeaker = byeSpeaker;
})(window);

//Start of an IFFE

( function (window) {
    var speakWord = "Hello";

    var helloSpeaker = {};

    function speak(name) {
      console.log(speakWord + " " + name);
    }


    helloSpeaker.speak = function (name){
      console.log(speakWord + " " + name);
    };



    window.helloSpeaker = helloSpeaker;
})(window);

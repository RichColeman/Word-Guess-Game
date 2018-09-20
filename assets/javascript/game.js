var phrases = ["tastykake", "wawa", "cheesesteak", "jawn", "rocky", "wooder","iggles","mummer","sixers","crabfries","hoagiefest","questlove"];
var chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
var chosenWordArr = chosenWord.split("");
var guesses = 13;
var correctGuesses = [];
var letters = [];
var underscoreWord = "";
var youWon = [];


for (var i = 0; i < chosenWord.length; i++) {
  underscoreWord += "_";
}
var underscoreArr = underscoreWord.split("");

var underscoresSpan = document.getElementById("underscores");
var guessesCount = document.getElementById("guesses-count");
var lettersGuessed = document.getElementById("letters-guessed");
var verdictSpan = document.getElementById("verdict");
var resetSpan = document.getElementById("reset");


underscoresSpan.innerText = underscoreWord;
guessesCount.innerText = "Youse got " + guesses + " guesses left.";
lettersGuessed.innerText = "Youse already guessed " + letters + " .";

// function myFunction() {
//     document.play("https://open.spotify.com/track/4o6BgsqLIBViaGVbx5rbRk?si=8RaLNS8rS8O9CeWjpFiPvg")
// }

// document.getElementsByClassName("music").addEventListener("click", myFunction);



document.onkeyup = function(event) {
  var userGuess = event.key;
    if (userGuess !== letters) {
      letters.push(userGuess);
      console.log(letters);
      lettersGuessed.textContent = "Youse already guessed " + letters + ".";
    }
    for (i = 0; i < chosenWord.length; i++) {
      if(guesses >= 1){
      if (chosenWordArr[i] === userGuess) {
        correctGuesses.push(i);
        guesses+= 1;
        console.log(correctGuesses);
        underscoreArr[i] = chosenWordArr[i];
        underscoresSpan.innerText = underscoreArr.toString();
        //   if (underscoreArr.findIndex("_") === -1){
        //     verdictSpan.innerText = "Holy heck, you won."
        // } else
        if (underscoreArr.indexOf("_") === -1) {
          youWon.push(Math.floor(Math.random() * 2));
          verdictSpan.innerHTML = "<h3>You won! Have a hoagie</h3>";
          resetSpan.innerHTML = "<h3>Refresh the page to play again!</h3><h8>(I'll figure out a more elegant way to reset the game soon.)</h>";
          guesses = 13;
          correctGuesses = [];
          letters = [];
          phrases = ["tastykake", "wawa", "cheesesteak", "jawn", "rocky"];
          chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
        }
      } else {
        guesses = 13 - letters.length;
        guessesCount.textContent = "Youse got " + guesses + " guesses left.";
      }
    } else {
      verdictSpan.innerHTML = "<h3> You didn't guess the word. You're the Andrew Bynum of Hangman. Refresh and try again."
      guessesCount.innerHTML = "";
      lettersGuessed.innerHTML = "";
    }
    }
  };

var resetGame = function(event) {
  guesses = 13;
  correctGuesses = [];
  letters = [];
  underscoreWord = "";
  phrases = ["tastykake", "wawa", "cheesesteak", "jawn", "rocky"];
  chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
  underscoresSpan.innerText = underscoreWord;
  guessesCount.innerText = "Youse got " + guesses + " guesses left.";
  lettersGuessed.innerText = "Youse already guessed " + letters + " .";
  for (var i = 0; i < chosenWord.length; i++) {
    underscoreWord += "_";
  }
};

// document.onkeyup = function(event) {
//   var shiftPress = event.key;
//   if (youWon > 0 && shiftPress === "Shift"){
//     resetGame();
//   }
// }

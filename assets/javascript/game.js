var phrases = ["tastykake", "wawa", "cheesesteak","jawn","rocky",];
var chosenWord = phrases[Math.floor(Math.random() * phrases.length)];
var chosenWordArr = chosenWord.split("");
console.log(chosenWordArr);
var guesses = 13;
var correctGuesses = [];
var letters = [];
var underscoresSpan = document.getElementById("underscores");
var guessesCount = document.getElementById("guesses-count");
var lettersGuessed = document.getElementById("letters-guessed");
var verdictSpan = document.getElementById("verdict");
var resetSpan = document.getElementById("reset");
var underscoreWord = "";


for (var i = 0; i < chosenWord.length; i++) {
  underscoreWord += "_";
}
var underscoreArr = underscoreWord.split("");

console.log(underscoreArr);

underscoresSpan.innerText = underscoreWord;
guessesCount.innerText = "Youse got " + guesses + " guesses left.";
lettersGuessed.innerText = "Youse already guessed " + letters + " .";

document.onkeyup = function(event) {
  var userGuess = event.key;
  if (userGuess !== letters) {
    letters.push(userGuess);
    console.log(letters);
    lettersGuessed.textContent = "Youse already guessed " + letters + ".";
  } else if (userGuess.some(letters) === true){
    console.log("nope");
  }
if (guesses > 0){
  for (i = 0; i < chosenWord.length; i++) {
    if (chosenWordArr[i] === userGuess) {
      correctGuesses.push(i);
      console.log(correctGuesses);
      underscoreArr[i] = chosenWordArr[i];
      underscoresSpan.innerText = underscoreArr.toString();
    //   if (underscoreArr.findIndex("_") === -1){      
    //     verdictSpan.innerText = "Holy heck, you won."
    // } else
  if (underscoreArr.indexOf("_") === -1) {
    console.log ("you won");
    verdictSpan.innerHTML = "<h3>You won! Have a hoagie</h3>";
    resetSpan.innerHTML = "<h3>Press SHIFT to play again!</h3>";

  }  
  
  
  }
   else {
    guesses = 13 - letters.length;
    guessesCount.textContent = "Youse got " + guesses + " guesses left.";
  }
}
}
}


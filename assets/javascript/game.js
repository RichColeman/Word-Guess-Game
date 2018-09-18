//phrases for the word guess game
var phrases = ["tastykake", "wawa"
];

// choose a random word
var chosenWord = phrases[Math.floor(Math.random() * phrases.length)]

//initialized variables
var guesses = 13;
var letters = [];

// display on the screen one underscore per letter for a specific word
// select the element from the DOM using document
var underscoresSpan = document.getElementById("underscores");
var guessesCount = document.getElementById("guesses-count");
var lettersGuessed = document.getElementById("letters-guessed");
var underscoreWord = "";
var verdictSpan = document.getElementById("verdict");

for (var i = 0; i < chosenWord.length; i++) {
  underscoreWord += "_";
}

function changeValues(){

}

// each underscore an element
// currently reference position

underscoresSpan.innerText = underscoreWord;
guessesCount.innerText = "Youse got " + guesses + " guesses left.";
lettersGuessed.innerText = "Youse already guessed " + letters + " .";

// take user input and check it against the specific word
// create an event for onkeyup
document.onkeyup = function(event) {
  //define userGuess as an event.key
  var userGuess = event.key;
  // push userGuess to the letters array if the user hasn't guessed it already
  if (userGuess !== letters) {
    letters.push(userGuess);
    lettersGuessed.textContent = "Youse already guessed " + letters + ".";
  } else {
    lettersGuessed.textContent = "Dumb";

  }

  for (var i = 0; i < chosenWord.length; i++) {
    // check guesses number
    if (guesses > 0) {
      //check user guess with if else statement
      // if guess matches a letter from the chosen word
      if (userGuess === chosenWord[i]) {
        console.log("this works");
        var correctLetter = chosenWord.charAt(i);
        console.log(correctLetter);
        underscoreWord = underscoreWord.replace(underscoreWord[i], correctLetter);
        underscoresSpan.textContent = underscoreWord;
        console.log(underscoreWord)
        // console.log(underscoreWord.charAt(i));
        // replace underscore with letter***NEED TO FIGURE THIS OUT
        // underscoreWord.splice(0, 1, userGuess);
        // ***NEED TO FIGURE THIS OUT***
        // wrong guess decreases guess count and logs guess in html
      } else {
        guesses = 13 - letters.length;
        guessesCount.textContent = "Youse got " + guesses + " guesses left.";
        console.log(guesses);
      }
      // displays loss message
    } else {
      verdictSpan.textContent = "Youse lost. Go get a citywide and try again.";
      lettersGuessed.textContent = "";
    }
  }
};

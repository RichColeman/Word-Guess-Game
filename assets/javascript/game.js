//phrases for the word guess game
var phrases = ["tastykake","cheesesteak","jawn","rocky","Schuylkill", "Water Ice","Wawa"]
console.log(phrases[0].length)

// choose a random word
var chosenWord = phrases[0];

//initialized variables
var guesses = 13;
var letters = [];

// display on the screen one underscore per letter for a specific word
// select the element from the DOM using document
var underscoresSpan = document.getElementById("underscores");
var guessesCount = document.getElementById("guesses-count")
var lettersGuessed = document.getElementById("letters-guessed")
var underscoreWord = ""

for (var i = 0; i < chosenWord.length; i++){
    underscoreWord += "_ ";
}

// each underscore an element
// currently reference position



    underscoresSpan.innerText = underscoreWord;
    guessesCount.innerText = "Youse got " + guesses + " guesses left."
    lettersGuessed.innerText = "Youse already guessed" + letters + " ."

// take user input and check it against the specific word
var correctLetter = correctLetter <= chosenWord.length

document.onkeyup = function(event) {
    var userGuess = event.key;
    for (let i = 0; i < underscoreWord.length; i++){
        if (userGuess.includes(underscoreWord[i])){
            console.log("you guessed right!")
        } else {console.log("you guessed wrong")


    }
}
}
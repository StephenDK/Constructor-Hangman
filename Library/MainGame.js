//  Get the inquirer npm 
var inquirer = require("inquirer");
// Get the words from the "wordlist.js" file
var words = require("./wordlist");



// game constructor will keep score and control the flow of the game
function Game() {

    // reference point for inquirer
    var self = this;

    // Prompt user for letter
    this.askForLetter = function() {
        return inquirer
            .prompt([
                {
                    type: "input",
                    name: "choice",
                    message: "Guess a letter!",

                }
            ]).then(function(val) {
                // If the users guess is correct log correct for the user
                var guessIsCorrect = self.currentWord.guessLetter(val.choice);
                if (guessIsCorrect) {
                    console.log("Correct!")
                }else {
                    // if the guess is wrong minus guessesleft and display wron guess message
                    self.guessesLeft--;
                    console.log("Sorry thats incorrect!");
                    console.log(self.guessesLeft + " guesses remaining!!")
                }
            });
    }

    // when game is over display "thanks for playing"
    this.gameOver = function() {
        console.log("Thanks for playing!!");
    }

    // Set guesses to 10 and get next word
    this.play = function() {
        // Guesses
        this.guessesLeft = 10;
        // Next word function
        this.nextWord();
    };
    this.nextWord = function() {
        // Set variable to random word
        var randomWord = words[Math.floor(Math.random() * words.length)];
        console.log(randomWord);
    };
}

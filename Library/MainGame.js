//  Get the inquirer npm 
var inquirer = require("inquirer");

//Get the word constructor to break down the word
var Word = require("./WordFormatter"); 

// Get the words from the "wordlist.js" file
var words = require("./wordlist");




// game constructor will keep score and control the flow of the game
function PlayBall() {

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
    };

    // Prompt user if they would like to play again
    this.askToPlayAgain = function() {
        inquirer.prompt([
            {
                type: "confirm",
                name: "choice",
                message: "Do you want to play again?"
            }
        ]).then(function(val) {
            // If the user pick yes play again else end the game
            if (val.choice) {
                self.play();
            } else {
                self.gameOver();
            }
        });
    };

    this.makeGuess = function() {
        this.askForLetter().then(function() {
            // if the user has no more guesses show the word
            if (self.guessesLeft < 1) {
                console.log("No guesses left. The word was " + self.currentWord.getSolution());
                // Ask to play again
                self.askToPlayAgain();
            } else if (self.currentWord.guessedCorrectly()) {
                console.log("You got it right");
                self.guessesLeft = 10;
                self.nextWord();
            } else {
                self.makeGuess();
            }
        });
    };

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
        this.currentWord = new Word(randomWord);
        console.log("Current word: " + this.currentWord);
        this.makeGuess();
    };
}

module.exports = PlayBall;
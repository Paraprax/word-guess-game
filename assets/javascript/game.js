

// array of secret words
var words = ["chameleon", "vulture", "sandman", "electro", "kraven", "mysterio", "shocker", "venom", "rhino", "hobgoblin", "carnage", "morbius", "kingpin", "scorpion",]
    
// picks a word from the array via a random index number
var secretWord = words[Math.floor(Math.random() * words.length)];

// generates an array of underscores as blanks to match the number of letters in the secret word
var marquee = [];
function marqueeBuilder() {
    for (var a = 0; a < secretWord.length; a++) {

        marquee[a] = "_";

    }
}

// an array to gather the non-matching guess letters
var wrongAnswers = [];{
}

/* keeps track of the unguessed letters left in 'secretWord', initialized with the total number of letters
in the secretWord string. Later our game loop will subtract 1 from this number for each correct guess*/
var lettersLeft = secretWord.length;

// empty array to hold user letter-input grabbed by event-listener later
var guess = [];

var lettersLeft = secretWord.length;

/* prints the marquee to its span element with current contents of array*/
function updateMarquee () {
    document.getElementById('marquee').innerHTML = (marquee);
}

function updateWrongos () {
    document.getElementById('wrongos').innerHTML = (wrongAnswers);
}

function resetLettersLeft () {
    lettersLeft = secretWord.length;
}

function resetWrongAnswers () {
    wrongAnswers = [];
}

function winMessage () {
    document.getElementById('winMessage').innerHTML = ("You win!");
}

function loseMessage () {
    document.getElementById('loseMessage').innerHTML = ("You lose!");
}

function clearMessages () {
    document.getElementById('winMessage').innerHTML = ("");
    document.getElementById('loseMessage').innerHTML = ("");
}

// sets up the game values as they should be at the beginning of any round
function reset () {
    console.log(marquee.join(" "));
    console.log(secretWord);
    marqueeBuilder();
    updateMarquee();
    resetWrongAnswers();
    updateWrongos();
    clearMessages();
}


// ~~~~ ACTUAL GAME FUNCTION: ~~~~ (runs when button is clicked)

    function hangman() {

        //resets the game
        reset();

        // for-loop keeping track of rounds
        for (r = 0; r < secretWord.length; r++) 
        {

            //keypress event-listener
            document.onkeyup = function(event) 
            {
                var guess = String.fromCharCode(event.keyCode).toLowerCase();

                var foundOne = false;

                console.log(guess);

                /* for-loop comparing each letter in 'secretWord' to the guessed letter. 
                If one matches, it replaces the corresponding underscore in 'marquee'
                (ie. has the same index-position as the letter in 'secretWord') with 
                the guessed letter */
                for (var i = 0; i < secretWord.length; i++) //every time you enter a letter, it runs this whole loop
                {                                           //FOR EVERY letter in secretWord

                    if (secretWord[i] == guess && marquee[i] == "_" ) // if the letter guessed matches a letter in the secret word, 
                                                                      // && that spot hasn't already been filled(prevents cheating by guessing one correct letter over and over)
                    {
                        marquee[i] = guess;     //replace the blank in marquee with that letter
                        lettersLeft--;          //subtract 1 from the # of letterLeft
                        foundOne = true;        
                    }
                    else if (secretWord[i] == guess) // if the letter's been guessed already, it neither counts
                                                     // toward the lettersLeft count or wrongAnswer array
                    {
                        foundOne = true;                
                    }

                }

                console.log(lettersLeft);
                
                // if NO letter matched the guess during any run of the loop, foundOne will stay false and....
                if (i == secretWord.length && foundOne == false)
                {
                    wrongAnswers.push(" " + guess);
                }

                // if all the letters are successfully guessed
                if (lettersLeft == 0)
                {
                    winMessage();
                }

                if (wrongAnswers.length == 10)
                {
                    loseMessage();
                }

                //the marquee and wrong answers are updated after each keystroke
                updateMarquee();
                updateWrongos ();
            
            }
            
        }
    }


        

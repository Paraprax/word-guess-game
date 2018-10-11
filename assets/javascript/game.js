

// array of secret words
var words = ["chameleon", "vulture", "sandman", "electro", "kraven", "mysterio", "shocker", "venom"]
    
// picks a word from the array via a random index number
var secretWord = words[Math.floor(Math.random() * words.length)];

// generates an array of underscores as blanks to match the number of letters in the secret word
var marquee = [];
for (var a = 0; a < secretWord.length; a++) {

    marquee[a] = "_";

}

/* keeps track of the unguessed letters left in 'secretWord', initialized with the total number of letters
in the secretWord string. Later our game loop will subtract 1 from this number for each correct guess*/
var lettersLeft = secretWord.length;

/* prints the marquee to its span element with current contents of array*/
function updateMarquee () {
    document.getElementById('marquee').innerHTML = (marquee);
}


// ~~~~ ACTUAL GAME LOGIC: ~~~~

// while (lettersLeft > 0) { (commented out for now)

    console.log(marquee.join(" "));

    console.log(secretWord);

    updateMarquee();
        

    // empty array to hold user letter-input grabbed by event-listener later
    var guess = [];

    var lettersLeft = secretWord.length;

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

                if (secretWord[i] == guess) // if the letter guessed matches a letter in the secret word
                {
                    marquee[i] = guess;     //replace the blank in marquee with that letter
                    lettersLeft--;          //subtract 1 from the # of letterLeft
                    foundOne = true;        
                }

            }
            
            // if NO letter matched the guess during any run of the loop, foundOne will stay false and....
            if (i == secretWord.length && foundOne == false)
            {console.log("Wrong!");}

            updateMarquee();
        
        }
        
    }


        

const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (letter === ' ') {
            puzzle += ' '
        } else {
        this.guessedLetters.includes(letter) ? puzzle += letter : puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    if (typeof guess != 'string' || guess.length != 1) {
        throw Error('Invalid input!')
    }

    guess = guess.toLowerCase()

    if (this.guessedLetters.includes(guess)) {
        return console.log('You already guessed this!')
    } else if (this.word.includes(guess)) {
        console.log('Got it!')
    } else {
        this.remainingGuesses--
        console.log('Missed it!')
    }

    this.guessedLetters.push(guess)
}

Hangman.prototype.getRemainingGuesses = function () {
    return 'Guesses Remaining: ' + this.remainingGuesses
}

const game1 = new Hangman ('Cat', 2)

console.log(game1.getPuzzle())
console.log(game1.getRemainingGuesses())

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    console.log(game1.getPuzzle())
    console.log(game1.getRemainingGuesses())
})
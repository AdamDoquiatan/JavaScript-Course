const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
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
    document.body.querySelector("#puzzle").textContent = puzzle
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
    console.log(this.getStatus())
}

Hangman.prototype.getRemainingGuesses = function () {
    document.body.querySelector("#guesses").textContent = 'Guesses Remaining: ' + this.remainingGuesses
}

Hangman.prototype.getStatus = function () {

    let finished = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {

        } else {
            finished = false
        }
    })

    if (this.remainingGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }

    return this.status
}
const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = ['c', 'e']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    for(i = 0; i < this.word.length; i++) {
        this.word[i] === this.guessedLetters[i] || this.word[i] === ' ' ? puzzle += this.word[i] : puzzle += '*'
    }
    return puzzle
}

const game1 = new Hangman ('Cat', 2)
console.log(game1.getPuzzle())

const game2 = new Hangman ('New Jersey', 4)
console.log(game2.getPuzzle())
const Hangman = function (word, remainingGuesses) {
    this.word = word
    this.remainingGuesses = remainingGuesses
}

const game1 = new Hangman ('electroencephalograph', 20)
const game2 = new Hangman ('dog', 2)

console.log(game1)
console.log(game2)
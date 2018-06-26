class Hangman {
    constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('')
    this.remainingGuesses = remainingGuesses
    this.guessedLetters = []
    this.status = 'playing'
    }
    get puzzle() {
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

    get statusMessage() {
        const message = document.body.querySelector("#message")
    
        if (this.status === 'failed') {
            message.textContent = `You failed, yo! FYI, the word was "${this.word.join('')}".`
        } else if (this.status === 'finished') {
            message.textContent = 'You the winner!'
        } else {
            message.textContent = `Guesses Remaining: ${this.remainingGuesses}`
        }
        return message.textContent
    }
    makeGuess(guess) {
        if (this.status === 'playing') {

            if (typeof guess != 'string' || guess.length != 1) {
                throw Error('Invalid input!')
            }
    
            guess = guess.toLowerCase()
    
            if (this.guessedLetters.includes(guess)) {
                return console.log('You already guessed this!')
            } else if (this.word.includes(guess)) {
    
            } else {
                this.remainingGuesses--
            }
    
            this.guessedLetters.push(guess)
            console.log(this.getStatus())
        }
    }
    getStatus() {
    let finished = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {

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

}
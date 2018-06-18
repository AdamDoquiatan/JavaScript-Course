const game1 = new Hangman ('Cat', 2)
game1.getPuzzle()
game1.getRemainingGuesses()

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.getPuzzle()
    game1.getRemainingGuesses()
})
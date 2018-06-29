const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

// Call from other file (same as before)
getPuzzle('2').then((puzzle) => {
console.log(puzzle)
}).catch((err) => {
console.log(`Error: ${err}`)
})
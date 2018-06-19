// HTTP (Hypertext Transfer Protocol)
// Request - What do we want to do
// Response - What was actually done

const game1 = new Hangman ('Car Parts', 2)
game1.puzzle
game1.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    game1.makeGuess(guess)
    game1.puzzle
    game1.statusMessage
})

// Making an HTTP request
const request = new XMLHttpRequest()

request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        console.log(data)
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place.')
    }
})

request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
request.send()

/////////

const countryCode = "CA"
const countryReq = new XMLHttpRequest()

countryReq.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((obj) => {
            return obj.alpha2Code === countryCode
        }) 
        console.log(country.name)
    } else if (e.target.readyState === 4) {
        console.log('Something went wrong.')
    }
})

countryReq.open('GET', 'http://restcountries.eu/rest/v2/all')
countryReq.send()


const getPuzzle = (callback) => {
    const request = new XMLHttpRequest()

    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText)
            callback(undefined, data.puzzle)
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined)
        }
    })
    
    request.open('GET', 'http://puzzle.mead.io/puzzle?wordCount=3')
    request.send()
}

const getCountry = (countryCode, callback) => {
    const countryReq = new XMLHttpRequest()

    countryReq.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((obj) => obj.alpha2Code === countryCode)
        callback(undefined, country.name)
    } else if (e.target.readyState === 4) {
        callback('Something went wrong.')
    }
})

countryReq.open('GET', 'http://restcountries.eu/rest/v2/all')
countryReq.send()
}
const getPuzzle = (wordCount) => {
    return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`).then((response) => {
        if (response.status === 200) {
            return response.json()
        } else {
            throw new Error('Unable to fetch puzzle.')
        }
    }).then((data) => {
        return data.puzzle
    })
}

const getCountry = (countryCode) => new Promise((resolve, reject) => {
    const countryReq = new XMLHttpRequest()

    countryReq.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText)
        const country = data.find((obj) => obj.alpha2Code === countryCode)
        resolve(country.name)
    } else if (e.target.readyState === 4) {
        reject('Something went wrong.')
    }
})

    countryReq.open('GET', 'http://restcountries.eu/rest/v2/all')
    countryReq.send()
})
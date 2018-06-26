const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
    
    if(response.status === 200) {
        const data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Unable to get puzzle')
    }
}

const getCountry = async (countryCode) => {
    const response = await fetch('http://restcountries.eu/rest/v2/all')

    if (response.status === 200) {
        const data = await response.json()
        return country = data.find((obj) => obj.alpha2Code === countryCode)
    } else {
        throw new Error ('Oh no! Something bad happened')
    }

}

const getLocation = async () => {
    const response = await fetch('https://ipinfo.io/json?token=20a6b908051d76')

    if (response.status === 200) {
        return response.json()
    } else {
        throw new Error('Something went wrong')
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation()
    const country = await getCountry(location.country)
    return country
}

export { getPuzzle as default}
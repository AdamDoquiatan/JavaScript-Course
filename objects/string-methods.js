let name = '   Adam Doquiatan'

// length property
console.log(name.length)

// convert to upper case
console.log(name.toUpperCase())

// convert to lower case
console.log(name.toLowerCase())

// includes method
let password = 'somethingelse'
console.log(password.includes(password))

// trim method
console.log(name.trim())

isValidPassword = function (string) {
    string.trim()
    return string.length > 8 && !string.includes('password')
}

console.log(isValidPassword('asdfp'))
console.log(isValidPassword('   abc123%$#^%&&'))
console.log(isValidPassword('asdfpasdfpoijpassword'))
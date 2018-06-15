// const myAge = 27
// const message = myAge >= 18 ? 'You can vote' : 'You cannot vote'
// console.log(message)

const myAge = 29
const showPage = () => {
    return 'Showing the page'
}

const showErrorPage = () => {
    return 'Showing the error page'
}

const message = myAge >= 19 ? showPage() : showErrorPage()
console.log(message)

const team = ['Tyler', 'Porter', 'Other guy', 'Me', 'Other Me']

const teamMessage = team.length <= 4 ? `Team size ${team.length}` : 'Too many people on your team'
console.log(teamMessage)
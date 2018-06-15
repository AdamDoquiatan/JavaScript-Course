let isGuestOneVegan = true
let isGuestTwoVegan = false

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Only offer vegan dishes.')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Offer some vegan dishes.')
} else {
    console.log('Give them whatever you want.')
}
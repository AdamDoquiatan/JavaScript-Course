const notes = [{
    title: 'My next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'habits to work on',
    body: 'exercise, Eating a bit better'
}, {
    title: 'office modifications',
    body: 'get a new seat'
}]

const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    })
}

const findNote = function (notes, noteTitle) {
    return notes.find(function (note) {
        return note.title.toLowerCase() === noteTitle.toLowerCase()
    })
}

const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
        const isTitleMatch = note.title.toLowerCase().includes(query)
        const isBodyMatch = note.title.toLowerCase().includes(query)
        return isTitleMatch || isBodyMatch
    })
}


//console.log(findNotes(notes, 'work'))

//const note = findNote(notes, 'Office modifications')
//console.log(note)

sortNotes(notes)
console.log(notes)
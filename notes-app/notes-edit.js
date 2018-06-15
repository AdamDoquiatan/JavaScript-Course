let noteTitle = document.querySelector('#note-title')
let noteBody = document.querySelector('#note-body')
const noteId = location.hash.substring(1)
const lastUpdated = document.querySelector('#last-updated')
let notes = getSavedNotes()
let note = notes.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

// Note title functionality
noteTitle.value = note.title
noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    generateLastUpdated(lastUpdated)
    saveNotes(notes)
})

// Note body functionality
noteBody.value = note.body
noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    generateLastUpdated(lastUpdated)
    saveNotes(notes)
})

document.querySelector('button').addEventListener('click', () => {
    removeNote(note.id)
    saveNotes(notes)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if(e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        note = notes.find(function (note) {
            return note.id === noteId
        })
        
        if (!note) {
            location.assign('/index.html')
        }

        noteTitle.value = note.title
        noteBody.value = note.body
        generateLastUpdated(lastUpdated)
    }
})
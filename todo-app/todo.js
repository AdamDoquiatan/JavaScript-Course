let todos = getSavedTodos()

const filter = {
    id : '',
    searchText : "",
    showingAll : true
}

console.log(todos)

generateSummeryDOM(todos, filter)
renderTodos(todos, filter)

// Search field -- filters text and reprints it
document.querySelector('#search-field').addEventListener('input', (e) => {
    filter.searchText = e.target.value
    renderTodos(todos, filter)
})

// Adds a todo from form
document.querySelector('#add-todo-form').addEventListener('submit', (e) => {
    e.preventDefault()
    todos.push({
        id : uuidv4(),
        task : e.target.elements.addField.value,
        complete : false
    })

    saveTodos(todos)

    e.target.elements.addField.value = ""
    generateSummeryDOM(todos, filter)
    renderTodos(todos, filter)
})

document.querySelector('#hide-completed').addEventListener('change', (e) => {
    document.querySelector('#container').innerHTML = ''

    if (e.target.checked) {
        filter.showingAll = false
        renderTodos(todos, filter)
    } else {
        filter.showingAll = true
        renderTodos(todos, filter)
    }
})
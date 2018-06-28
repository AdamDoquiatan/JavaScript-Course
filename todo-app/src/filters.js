// Set up filters default object
const filters = {
    searchText: '',
    hideCompleted: false
}

// getFilters
// Arguments: none
// Return value: filters object
const getFilters = () => filters

// setFilters
// Arguments: updates object with optional searchText or hideCompleted
// Return value: none
const setFilters = (searchText, hideCompleted) => {
    if (searchText != '') {
        filters.searchText = searchText   
    }

    if (hideCompleted === true || hideCompleted === false) {
        filters.hideCompleted = hideCompleted
    }
}

// Make sure to set up the exports
export { getFilters, setFilters }
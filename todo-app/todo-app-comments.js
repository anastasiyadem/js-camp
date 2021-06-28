const todos = [ {
    text: 'Make morning gymnastics',
    completed: true
}, {
    text: 'Feed my cat',
    completed: true
}, {
    text: 'Order new credit card',
    completed: false
}, {
    text: 'Meet friends',
    completed: false
}, {
    text: 'Bake a bread',
    completed: false
} ]

//1.    Setup div into html file
//2.    Setup filters(searchText) and wire up a new filter input to change it
//3.    Create a renderTodos function to render and rerender the latest filtered data

const filters = {
    searchText: ''
}
const getThingsToDo = todos.filter (function(todo) {
    return !todo.completed
})

const howManyTodosLeft = document.createElement('h3')
howManyTodosLeft.textContent = `You have ${getThingsToDo.length} todos left`
document.querySelector('body').appendChild(howManyTodosLeft)

const renderTodos = function(todos, filters) {
    const filterTodos = todos.filter(function(todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#todos').innerHTML = ''

    filterTodos.forEach(function(todo) {
        const todoEl = document.createElement('p')
        todoEl.textContent = todo.text
        document.querySelector('#todos').appendChild(todoEl)
    })
}

renderTodos(todos, filters)

todos.forEach(function(todo) {
    const howManyTodosLeft = document.createElement('p')
    howManyTodosLeft.textContent = todo.text
    document.querySelector('body').appendChild(howManyTodosLeft)
})


// const print1 = function(name, text) {
//     const addNewElement = document.createElement(name)
//     addNewElement.textContent = text
//     document.querySelector('body').appendChild(addNewElement)
// }
// print1('h3', `You have ${getThingsToDo.length} todos left!`)



//getThingsToDo.forEach(function(todo) {


//ends

document.querySelector('#add-todo').addEventListener('click', function(e) {
    console.log('I am adding a new todo')
})

document.querySelector('#new-todo').addEventListener('input', function(e) {
    console.log(e.target.value)
})

document.querySelector('#new-todo').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderTodos(notes, filters)
})

//You have 2 todos left
//Add a p for each todo above(use text value)

// const myTodoSearch = document.querySelectorAll('p')

// myTodoSearch.forEach(function(todo) {
//     if (todo.textContent.includes('the')) {
//         todo.remove()
//     }
    
// })

// todos.forEach(function(todo) {
//     const howManyTodosLeft = document.createElement('p')
//     howManyTodosLeft.textContent = todo.text
//     document.querySelector('body').appendChild(howManyTodosLeft)
// })

// document.querySelector('#add-todo').addEventListener('click', function(e) {
//     console.log('I am adding a new todo')
// })

// document.querySelector('#new-todo').addEventListener('input', function(e) {
//     console.log(e.target.value)
// })
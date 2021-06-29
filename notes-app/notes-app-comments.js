const notes = [{
    title: 'my next trip',
    body: 'I would like to go to Spain'
}, {
    title: 'Habbits to work on',
    body: 'Exercise. Eat no sugar.'
}, {
    title: 'Office modifications',
    body: 'Get a new seat'
}]

//localStorage.setItem('location', 'Amsterdam')
// console.log(localStorage.getItem('location'))
// localStorage.removeItem('location')
// localStorage.clear()

// const user = {
//     name: 'Anastasia',
//     age: 36
// }

// const userJSON = JSON.stringify(user)
// console.log(userJSON)
// localStorage.setItem('user', userJSON)

// const userJSON = localStorage.getItem('user')
// const user = JSON.parse(userJSON)
// console.log(`${user.name} is ${user.age} years old`)

const filters = {
     searchText: ''
}

const renderNotes = function(notes, filters) {
    const filteredNotes = notes.filter(function(note) {
        return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    })

    document.querySelector('#notes').innerHTML = ''
    
    filteredNotes.forEach( function(note) {
        const noteEl = document.createElement('p')
        noteEl.textContent = note.title
        document.querySelector('#notes').appendChild(noteEl)
    })
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    e.target.textContent = 'The button was clicked'
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

// document.querySelector('#remove-all').addEventListener('click', function(e) {
//     document.querySelectorAll('.note').forEach(function(note) {
//         note.remove()
//     })
// })

//--Single--
//p                         target elements with p tag
//#replace                  target elements with id="replace"
//.item                     target elements with class="item"

//--Multiple--
//p#order                   target paragraph if it has an id="order"
//button.inventory          target button with class="inventory"
//h1#title.application      target an h1 header with id="title" and class="application"
//hi.application#title      target an h1 header with class="application" and id="title"

// How to create EventListener document.querySelector('button').addEventListener('name', 'functionToRun')
// //DOM - Document Object Model

// //Query and remove - remove the first tag, that matches our search
// // const p = document.querySelector('p')
// // p.remove()

// //Query all and remove
// const ps = document.querySelectorAll('p')
// ps.forEach(function(a) {
//     a.textContent = '****************'
//     //console.log(a.textContent)
//     //a.remove()
// })
// //Steps to add a new element to HTML document with the help of JavaScript
// //1. Add a new element
// const newParagraph = document.createElement('p')
// //2. Give it some meaningfull content
// newParagraph.textContent = 'This is a new element from JavaScript'
// //3. Name the exact place, where to put a new element
// document.querySelector('body').appendChild(newParagraph)



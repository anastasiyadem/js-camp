let notes = getSavedNotes()

const filters = {
     searchText: ''
}

renderNotes(notes, filters)

document.querySelector('#create-note').addEventListener('click', function (e) {
    //e.preventDefault()
    const id = uuidv4()

    notes.push({
        id: id,
        title: '',
        body: ''
    })
    saveNotes(notes)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', function(e) {
    filters.searchText = e.target.value
    renderNotes(notes, filters)
})

document.querySelector('#filter-by').addEventListener('change', function(e) {
    console.log(e.target.value)
})

window.addEventListener('storage', function(e) {
    if (e.key === 'notes') {
        notes = JSON.parse(e.newValue)
        renderNotes(notes, filters)   
    }
})

//Unix Epoch - January 1st 1970 00:00:00
const now = new Date()
const timestamp = now.getTime()

const myDate = new Date(timestamp)
console.log(myDate.getFullYear())

const past1 = new Date('March 18 2020 7:44:51')
const past2 = new Date('June 6 2020 12:21:03')
const timePast1 = past1.getTime()
const timePast2 = past2.getTime()

if (timePast1 < timePast2) {
    console.log(past1.toString())
} else if (timePast2 < timePast1) {
    console.log(past2.toString())
}

// console.log(now.toString())

// console.log(`Year: ${now.getFullYear()}`)
// console.log(`Month: ${now.getMonth()}`)
// console.log(`Day of Month: ${now.getDate()}`)
// console.log(`Hour: ${now.getHours()}`)
// console.log(`Minutes: ${now.getMinutes()}`)
// console.log(`Seconds: ${now.getSeconds()}`)

//1.Create two dates in the past(use strings for dates)
//2.Get timestamps for both.
//3.Figure out which is first and print its time(use toString)
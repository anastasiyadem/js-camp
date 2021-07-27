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

// const now = moment()
// now.subtract(1, 'weeks')//.subtract(1, 'year')
// console.log(now.format('MMMM Do YYYY'))
// console.log(now.fromNow('dd'))

// const nowTimestamp = now.valueOf()
// console.log(nowTimestamp)

// console.log(moment(nowTimestamp).toString())


const myBirthday = moment()
//myBirthday.set('year', 1985).set('month', 1).set('date', 12)
myBirthday.year(1985).month(1).date(12)
console.log(myBirthday.format('MMM D, YYYY'))
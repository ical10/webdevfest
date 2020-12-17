const {format} = require('date-fns')



const date = Date.parse("02-22-2021")

const formattedDate = format(date, 'dd.MM.yyyy')

console.log(date, formattedDate)

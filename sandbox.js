const addDate = require('./helpers/addDateToJSON')

res.locals.addDate = addDate

let arr = addDate('./users.json')

console.log(arr)

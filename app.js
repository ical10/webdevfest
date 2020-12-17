const express = require('express')
const app = express()
const PORT = 3500
const router = require('./routers')
const converter = require('./helpers/currencyConverter')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.locals.currencyConverter = converter

app.use('/', router)

app.listen(PORT, () => {
    console.log(`${PORT} is the magic word`)
})

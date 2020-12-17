const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000
const router = require('./routes')
const converter = require('./helpers/currencyConverter')
const dateFormat = require('./helpers/dateFormat')
const session = require('express-session')
const path = require('path')

// define session
app.use(session({
  secret: 'development',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

// set so ejs checks views dir (vim only)
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// helpers
app.locals.currencyConverter = converter
app.locals.dateFormatter = dateFormat

app.use(router)

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})

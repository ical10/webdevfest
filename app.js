const express = require('express')
const app = express()
const PORT = 5000
const routes = require('./routes/routes')
// require session
const session = require('express-session')

// define session
app.use(session({
  secret: 'development',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false }
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

app.use(routes)

app.listen(PORT, () => {
  console.log('listening on port ' + PORT)
})

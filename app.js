const express = require('express')
const app = express()
const PORT = 3500
const router = require('./routers')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))

app.use('/', router)

app.listen(PORT, () => {
    console.log(`${PORT} is the magic word`)
})

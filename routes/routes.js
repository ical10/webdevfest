const routes = require('express').Router()
const Controller = require('../controllers/controller')
const ControllerEvent = require('../controllers/controllerEvent')
// add controller for User
const ControllerUser = require('../controllers/controllerUser')

// Index / homepage
routes.get('/', Controller.showHome)

// route CR Event
routes.get('/events', ControllerEvent.showAll)
routes.get('/events/add', ControllerEvent.formAdd)
routes.post('/events/add', ControllerEvent.addEvent)

// route for register user
routes.get('/register', ControllerUser.formRegister)
routes.post('/register', ControllerUser.addUser)
// route for login user
routes.get('/login', ControllerUser.formLogin)
routes.post('/login', ControllerUser.login)

module.exports = routes

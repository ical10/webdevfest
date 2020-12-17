const routes = require('express').Router()
const Controller = require('../controllers/controller')
const ControllerEvent = require('../controllers/controllerEvent')
// add controller for User
const ControllerUser = require('../controllers/controllerUser')
// require middlewares
const { isLoggedIn, isAdmin } = require('../middlewares/authentication')

// Index / homepage
routes.get('/', Controller.showHome)

// route for register user
routes.get('/register', ControllerUser.formRegister)
routes.post('/register', ControllerUser.addUser)
// route for login user
routes.get('/login', ControllerUser.formLogin)
routes.post('/login', ControllerUser.login)

// session for login first
routes.use(isLoggedIn)

// route CR Event
routes.get('/events', ControllerEvent.showAll)

// add session if user role is admin
routes.get('/events/add', isAdmin, ControllerEvent.formAdd)
routes.post('/events/add', isAdmin, ControllerEvent.addEvent)


module.exports = routes

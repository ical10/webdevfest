const router = require('express').Router()
const Controller = require('../controllers/controller')
const ControllerEvent = require('../controllers/controllerEvent')
// add controller for User
const ControllerUser = require('../controllers/controllerUser')
// require middlewares
const {isLoggedIn, isAdmin} = require('../middlewares/authentication')

// Index / homepage
router.get('/', Controller.showHome)

// router untuk event
router.get('/events', ControllerEvent.showAll)
router.get('/events/en', ControllerEvent.showAllEn)
router.get('/events/id', ControllerEvent.showAllId)
router.get('/events/join/:id', ControllerEvent.getJoinEvent)

// route for register user
router.get('/register', ControllerUser.formRegister)
router.post('/register', ControllerUser.addUser)

// route for login user
router.get('/login', ControllerUser.formLogin)
router.post('/login', ControllerUser.login)

// session for login first
router.use(isLoggedIn)

// route CR Event

// add session if user role is admin
router.get('/events/add', isAdmin, ControllerEvent.formAdd)
router.post('/events/add', isAdmin, ControllerEvent.addEvent)
router.get('/events/edit/:id', isAdmin, ControllerEvent.getEditEvent)
router.post('/events/edit/:id', isAdmin, ControllerEvent.postEditEvent)
router.get('/events/delete/:id', isAdmin, ControllerEvent.getDeleteEvent)

module.exports = router

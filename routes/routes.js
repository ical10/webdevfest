const routes = require('express').Router()
const Controller = require('../controllers/controller')
const ControllerEvent = require('../controllers/controllerEvent')

// Index / homepage
routes.get('/', Controller.showHome)

// route CR Event
routes.get('/events', ControllerEvent.showAll)
routes.get('/events/add', ControllerEvent.formAdd)
routes.post('/events/add', ControllerEvent.addEvent)

module.exports = routes

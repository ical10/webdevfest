const router = require('express').Router()
const homeController = require('../controllers/index')
const eventController = require('../controllers/eventController')

router.get('/', homeController.index)

// router untuk event
router.get('/events/en', eventController.showAllEn)

router.get('/events/id', eventController.showAllId)

router.get('/events/edit/:id', eventController.getEditEvent)

router.post('/events/edit/:id', eventController.postEditEvent)

router.get('/events/delete/:id', eventController.getDeleteEvent)

router.get('/events/join/:id', eventController.getJoinEvent)


module.exports = router

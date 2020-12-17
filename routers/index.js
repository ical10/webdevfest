const router = require('express').Router()
const homeController = require('../controllers/index')
const eventController = require('../controllers/eventController')

router.get('/', homeController.index)

// router untuk event
router.get('/event', eventController.showAll)

router.get('/event/edit/:id', eventController.getEditEvent)

router.post('/event/edit/:id', eventController.postEditEvent)

router.get('/event/delete/:id', (req, res) => {

})


module.exports = router

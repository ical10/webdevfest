const router = require('express').Router()
const homeController = require('../controllers/index')

router.get('/', homeController.index)

// router untuk event
router.get('/event/add/:id', (req, res) => {

})

router.post('/event/add/:id', (req, res) => {

})

router.get('/event/delete/:id', (req, res) => {

})


module.exports = router

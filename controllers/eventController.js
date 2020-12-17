const {Event, User} = require('../models')

class Controller {
    static showAll(req, res) {
        Event.findAll()
            .then(events => {
                res.render('../views/event.ejs', {
                    events
                })
            })
            .catch(err => res.send(err))
    }

    static getEditEvent(req, res) {
        Event.findByPk(req.params.id)
            .then(currentEvent => {
                res.render('../views/editEvent.ejs', {
                    currentEvent
                })
            })
            .catch(err => res.send(err))
    }

    static postEditEvent(req, res) {
        const {title, price, description, location, date, tags} = req.body
        Event.update({
            title,
            price,
            description,
            location,
            date,
            tags
        }, {
            where: {
                id: req.params.id
            }
        })
            .then(events => {
                res.redirect('/event')
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller

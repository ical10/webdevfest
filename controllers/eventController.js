const {Event, User} = require('../models')


class Controller {
    static showAllEn(req, res) {
        Event.findAll()
            .then(events => {
                res.render('../views/eventsEn.ejs', {
                    events
                })
            })
            .catch(err => res.send(err))
    }

    static showAllId(req, res) {
        Event.findAll()
            .then(events => {
                res.render('../views/eventsId.ejs', {
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
                res.redirect('/events')
            })
            .catch(err => res.send(err))
    }

    static getDeleteEvent(req, res) {
        Event.destroy({
            where: {
                id: req.params.id
            }
        })
            .then(events => {
                res.redirect('/events')
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller

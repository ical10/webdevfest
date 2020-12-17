const {Event, User, UserEvent} = require('../models')


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

    static getJoinEvent(req, res) {
        let currentEvent
        Event.findByPk(+req.params.id, {
            include: [UserEvent]
        })
            .then(event => {
                currentEvent = event
                return UserEvent.findAll({
                    where: {
                        EventId: +req.params.id
                    },
                    include: [User]
                })
            })
            .then(users => {
                res.render('../views/eventparticipant.ejs', {
                    currentEvent, users
                })
            })
            .catch(err => res.send(err))
    }
}

module.exports = Controller

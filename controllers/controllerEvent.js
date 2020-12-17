const {Event, User, UserEvent} = require('../models')


class ControllerEvent {

  static showAll(req, res) {
    Event.findAll()
      .then(events => {
        res.render('tableEvent', {events})
      })
      .catch(err => {
        res.send(err)
      })
  }

  static formAdd(req, res) {
    res.render('addEventForm')
  }

  static addEvent(req, res) {
    const input = {
      name: req.body.name,
      price: +req.body.price,
      description: req.body.description,
      location: req.body.location,
      date: req.body.date,
      tags: `${req.body.tags1},${req.body.tags2}`
    }

    Event.create(input)
      .then(_ => {
        res.redirect('/events')
      })
      .catch(err => {
        res.send(err)
      })
  }
  static showAllEn(req, res) {
    Event.findAll()
      .then(events => {
        res.render('eventsEn', {
          events
        })
      })
      .catch(err => res.send(err))
  }

  static showAllId(req, res) {
    Event.findAll()
      .then(events => {
        res.render('eventsId', {
          events
        })
      })
      .catch(err => res.send(err))
  }

  static getEditEvent(req, res) {
    Event.findByPk(req.params.id)
      .then(currentEvent => {
        res.render('editEvent', {
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
        res.render('eventparticipant', {
          currentEvent, users
        })
      })
      .catch(err => res.send(err))
  }
}

module.exports = ControllerEvent

const { Event } = require('../models')

class ControllerEvent {
  static showAll(req, res) {
    Event.findAll()
      .then(events => {
        res.render('tableEvent', { events })
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
      HTM: +req.body.HTM,
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
}

module.exports = ControllerEvent

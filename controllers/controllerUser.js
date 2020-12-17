const {User} = require('../models')
const bcrypt = require('bcryptjs')

class ControllerUser {
  static formRegister(req, res) {
    res.render('formRegister')
  }

  static addUser(req, res) {
    const input = {
      username: req.body.username,
      password: req.body.password,
      level: req.body.level,
      language: req.body.language,
      role: 'user'
    }

    User.create(input)
      .then(_ => {
        res.redirect('/login')
      })
      .catch(err => {
        res.send(err)
      })
  }

  static formLogin(req, res) {
    res.render('formLogin')
  }

  static login(req, res) {
    const input = {
      username: req.body.username,
      password: req.body.password
    }

    User.findOne({where: {username: input.username}})
      .then(user => {
        if (user) {
          const validate = bcrypt.compareSync(input.password, user.password)

          if (validate) {
            // add session in before login
            req.session.userID = user.id
            req.session.role = user.role

            res.redirect('/events')
          } else {
            res.send('Username & Password mismatch')
          }
        } else {
          res.send('Username mismatch')
        }
      })
      .catch(error => {
        res.send(error)
      })
  }
}

module.exports = ControllerUser

const isLoggedIn = (req, res, next) => {
  if (req.session.userID) {
    next();
  } else {
    res.redirect('/login')
  }
}

const isAdmin = (req, res, next) => {
  if (req.session.userID && req.session.role === 'admin') {
    next();
  } else {
    res.redirect('/login')
  }
}

module.exports = { isLoggedIn, isAdmin }

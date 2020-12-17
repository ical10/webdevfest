const bcrypt = require('bcryptjs')

// Add function helpers for encrypting password
function encryptPassword(password) {
  const salt = bcrypt.genSaltSync(5);
  const hash = bcrypt.hashSync(password, salt);

  return hash
}

module.exports = encryptPassword

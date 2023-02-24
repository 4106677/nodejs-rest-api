const { auth, getCurrent } = require('./auth');
const login = require('./login');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar')

module.exports = {
  auth,
  login,
  getCurrent,
  logout,
  updateAvatar
};

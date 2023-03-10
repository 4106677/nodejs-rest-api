const { auth, getCurrent } = require('./auth');
const login = require('./login');
const logout = require('./logout');
const updateAvatar = require('./updateAvatar');
const verifyEmail = require('./verifyEmail');
const resendingEmail = require('./resendingEmail');

module.exports = {
  auth,
  login,
  getCurrent,
  logout,
  updateAvatar,
  verifyEmail,
  resendingEmail,
};

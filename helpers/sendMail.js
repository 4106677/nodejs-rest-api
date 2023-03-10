const sgMail = require('@sendgrid/mail');
require('dotenv').config();

const { SNDGRID_API_KEY } = process.env;

sgMail.setApiKey(SNDGRID_API_KEY);

const sendMail = async data => {
  const email = { ...data, from: '4106677@gmail.com' };
  try {
    sgMail.send(email);
    return true;
  } catch (err) {
    throw err;
  }
};

module.exports = sendMail;

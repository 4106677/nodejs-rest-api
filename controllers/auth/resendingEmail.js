const { User } = require('../../models');
const { NotFound, BadRequest } = require('http-errors');
const { sendMail } = require('../../helpers');

const resendingEmail = async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  console.log(user);

  const mail = {
    to: email,
    subject: 'Verify your email',
    html: `<a target="_blanc" href="http://localhost:3000/api/users/verify/${user.verificationToken}">Submit email</a>`,
  };

  if (!user) {
    throw NotFound();
  }

  if (!user.verify) {
    sendMail(mail);
    res.status(200).json({ message: 'Verification email sent' });
  } else {
    res.status(400).json({ message: 'Verification has already been passed' });
  }
};

module.exports = resendingEmail;

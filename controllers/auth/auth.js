const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcryptjs = require('bcryptjs');
const gravatar = require('gravatar');
const { nanoid } = require('nanoid');

const { sendMail } = require('../../helpers');

const auth = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict('Email in use');
  }
  const verificationToken = nanoid();
  const avatarURL = gravatar.url(email);

  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const data = await User.create({
    email,
    password: hashPassword,
    avatarURL,
    verificationToken,
  });

  const mail = {
    to: email,
    subject: 'Verify your email',
    html: `<a target="_blanc" href="http://localhost:3000/api/users/verify/${verificationToken}">Submit email</a>`,
  };

  await sendMail(mail);

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      email: data.email,
      password: data.password,
      avatarURL: data.avatarURL,
      verificationToken: data.verificationToken,
    },
  });
};

const getCurrent = async (req, res) => {
  const { email, subscription } = req.user;
  res.json({
    status: 'success',
    code: 200,
    data: {
      email,
      subscription,
    },
  });
};

module.exports = { auth, getCurrent };

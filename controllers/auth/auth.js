const { Conflict } = require('http-errors');
const { User } = require('../../models');
const bcryptjs = require('bcryptjs');

const auth = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  console.log(user);

  if (user) {
    throw new Conflict('Email in use');
  }
  const hashPassword = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
  const data = await User.create({ email, password: hashPassword });
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      email: data.email,
      password: data.password,
    },
  });
};

module.exports = auth;

const { Schema, model } = require('mongoose');
const Joi = require('joi');
const bcryptjs = require('bcryptjs');

const userSchema = Schema(
  {
    password: {
      type: String,
      required: [true, 'Password is required'],
    },
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: {
      type: String,
      default: null,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// userSchema.methods.setPasswords = function (password) {
//   this.password = bcryptjs.hashSync(password, bcryptjs.genSaltSync(10));
// };

const joiRegisterSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
  subscription: Joi.string(),
  token: Joi.string(),
});

const joiLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().email().required(),
});

const User = model('user', userSchema);

module.exports = { User, joiRegisterSchema, joiLoginSchema };

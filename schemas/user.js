const Joi = require('joi');

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

const joiEmailSchema = Joi.object({
  email: Joi.string().email().required(),
});

module.exports = {
  joiRegisterSchema,
  joiLoginSchema,
  joiEmailSchema,
};

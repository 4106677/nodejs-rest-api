const { joiRegisterSchema, joiLoginSchema, joiEmailSchema } = require('./user');
const { joiAddContactSchema, favoriteJoiSchema } = require('./constacts');

module.exports = {
  joiLoginSchema,
  joiRegisterSchema,
  joiAddContactSchema,
  favoriteJoiSchema,
  joiEmailSchema,
};

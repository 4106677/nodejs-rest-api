const { joiRegisterSchema, joiLoginSchema } = require('./user');
const { joiSchema, favoriteJoiSchema } = require('./constacts');

module.exports = {
  joiLoginSchema,
  joiRegisterSchema,
  joiSchema,
  favoriteJoiSchema,
};

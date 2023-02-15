const express = require('express');
const router = express.Router();
const { ctrlWrapper, validation } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../models/user');

router.post('/signup', validation(joiRegisterSchema), ctrlWrapper(ctrl.auth));
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));

module.exports = router;

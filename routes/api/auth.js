const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper, validation, upload } = require('../../middlewares');
const { auth: ctrl } = require('../../controllers');
const { joiRegisterSchema, joiLoginSchema } = require('../../schemas');

router.post('/signup', validation(joiRegisterSchema), ctrlWrapper(ctrl.auth));
router.post('/login', validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.get('/current', auth, ctrlWrapper(ctrl.getCurrent));
router.get('/logout', auth, ctrlWrapper(ctrl.logout));
router.patch('/avatars', auth, upload.single("avatar"), ctrlWrapper(ctrl.updateAvatar));

module.exports = router;

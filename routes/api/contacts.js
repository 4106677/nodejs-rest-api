const express = require('express');
const router = express.Router();
const { auth, ctrlWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');
const { joiSchema, favoriteJoiSchema } = require('../../models/contacts');

router.get('/', auth, ctrlWrapper(ctrl.listContacts));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getContactById));

router.post('/', auth, validation(joiSchema), ctrlWrapper(ctrl.addContact));

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeContact));

router.put(
  '/:contactId',
  validation(joiSchema),
  ctrlWrapper(ctrl.updateContact)
);

router.patch(
  '/:contactId/favorite',
  validation(favoriteJoiSchema),
  ctrlWrapper(ctrl.updateStatusContact)
);

module.exports = router;

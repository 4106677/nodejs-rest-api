const express = require('express');
const router = express.Router();
const { ctrlWrapper, validation } = require('../../middlewares');
const { contacts: ctrl } = require('../../controllers');
const { joiSchema, favoriteJoiSchema } = require('../../models/contacts');

router.get('/', ctrlWrapper(ctrl.listContacts));
router.get('/:contactId', ctrlWrapper(ctrl.getContactById));
router.post('/', validation(joiSchema), ctrlWrapper(ctrl.addContact));
router.delete('/:contactId', ctrlWrapper(ctrl.removeContact));
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

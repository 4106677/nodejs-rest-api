const express = require("express")
// const createError = require("http-errors")
const router = express.Router()
const {ctrlWrapper} = require("../../middlewares")
const {contacts: ctrl} = require("../../controllers")
// const { getContactById, removeContact, addContact, updateContact} = require("../../models/contacts")
// const Joi = require("joi");

// const {Schema, model} = require("mongoose");
//
// const contactSchema = Schema({
//   name: String,
//   email: String,
//   phone: Number,
// })
// const contactSchema = Joi.object({
//   name: Joi.string().required(),
//   email: Joi.string().email().required(),
//   phone: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
// })
// router.get("/", async (req, res, next) => {
//   try {
//     const data = await listContacts();
//     res.json({
//       status: "success",
//       code: 200,
//       data
//     })
//   } catch (err) {
//     next(err)
//   }
// })

// const Contact = model("product", contactSchema);

router.get("/", ctrlWrapper(ctrl.listContacts));

/*
router.get("/:contactId", async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const data = await getContactById(contactId);
    if (!data) {
      throw createError(404, `Contact ${contactId} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      data
    })
  } catch (err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const {error} = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw  error;
    }
    const data = await addContact(req.body);

    res.status(201).json({
      status: "success",
      code: 201,
      data
    })
  } catch (err) {
    next(err)
  }
})

router.delete('/:contactId', async (req, res, next) => {
  try {
    const {contactId} = req.params;
    const data = await removeContact(contactId);
    if (!data) {
      throw createError(404, `Contact ${contactId} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data
    })
  } catch (err) {
    next(err)
  }
})

router.put('/:contactId', async (req, res, next) => {
  try {
    const {error} = contactSchema.validate(req.body);
    if (error) {
      error.status = 400;
      throw  error;
    }
    const {contactId} = req.params;
    const data = await updateContact(contactId, req.body);
    if (!data) {
      throw createError(404, `Contact ${contactId} not found`)
    }
    res.json({
      status: "success",
      code: 200,
      data
    })
  } catch (err) {
    next(err)
  }
})

 */

module.exports = router

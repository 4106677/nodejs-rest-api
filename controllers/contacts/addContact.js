const {Contact} = require('../../models')
const addContact = async(req, res) => {
const data = await Contact.create(req.body);
	res.status(201).json({
		status: "success",
		code: 201,
		data
	})
}

module.exports =addContact;
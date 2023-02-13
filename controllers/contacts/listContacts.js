const {Contact} = require('../../models')
const listContacts = async(req, res) => {
const data = await Contact.find({});
	res.json({
      status: "success",
      code: 200,
      data
    })
}

module.exports = listContacts;

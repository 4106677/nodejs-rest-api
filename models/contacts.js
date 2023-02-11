const fs = require("fs/promises")

const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json")

const listContacts = async () => {
	const dataString = await fs.readFile(contactsPath, "utf8");
	const data = JSON.parse(dataString);
	return data;
}

const getContactById = async (contactId) => {
	const contactsList = await listContacts()
	console.log(contactsList)
	const contact = contactsList.find(contact => contact.id === contactId)
	return contact
}

const removeContact = async (contactId) => {
}

const addContact = async (body) => {
}

const updateContact = async (contactId, body) => {
}

module.exports = {
	listContacts,
	getContactById,
	removeContact,
	addContact,
	updateContact,
}

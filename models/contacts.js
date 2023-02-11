const fs = require("fs/promises")
const {nanoid} = require("nanoid");

const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json")

const listContacts = async () => {
	const data = await fs.readFile(contactsPath, "utf8");
	return JSON.parse(data);
}

const getContactById = async (contactId) => {
	const contactsList = await listContacts()
	const contact = contactsList.find(contact => contact.id === contactId)
	return contact
}

const removeContact = async (contactId) => {
}

const addContact = async ({name, email, phone}) => {
	const newContact = {
		id: nanoid(),
		name,
		email,
		phone,
	}

	const contactsList = await listContacts()
	contactsList.push(newContact)
	return newContact
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

const fs = require("fs/promises")
const {nanoid} = require("nanoid");

const path = require("path");

const contactsPath = path.join(__dirname, "./contacts.json")

const {Schema, model} = require("mongoose");

const contactSchema = Schema({
	name: String,
	email: String,
	phone: String,
})

const Contact = model("contact", contactSchema);

// const listContacts = async () => {
// 	const data = await fs.readFile(contactsPath, "utf8");
// 	return JSON.parse(data);
// }
/*
const getContactById = async (contactId) => {
	const contactsList = await listContacts()
	const contact = contactsList.find(contact => contact.id === contactId)
	return contact
}

const removeContact = async (contactId) => {
	const contactsList = await listContacts()
	const index = contactsList.findIndex(contact => contact.id === contactId);
	const deletedItem = contactsList[index]


	if (index !== -1) {
		contactsList.splice(index, 1);
		await fs.writeFile(contactsPath, JSON.stringify(contactsList))
	}
	return deletedItem ? deletedItem : null;
}

const addContact = async ({name, email, phone}) => {
	const newContact = {
		id: nanoid(4),
		name,
		email,
		phone,
	}

	const contactsList = await listContacts()
	contactsList.push(newContact)
	await fs.writeFile(contactsPath, JSON.stringify(contactsList))
	return newContact
}

const updateContact = async (contactId, body) => {
	const contactsList = await listContacts();
	const index = contactsList.findIndex(contact => contact.id === contactId);
	if (index === -1) {
		return null;
	}
	contactsList[index] = {contactId, ...body};
	await fs.writeFile(contactsPath, JSON.stringify(contactsList))
	return contactsList[index];
}
*/


module.exports = Contact;


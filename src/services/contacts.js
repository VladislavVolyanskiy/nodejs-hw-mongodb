import createHttpError from 'http-errors';
import { contactsCollection } from '../db/models/contact.js';

export const getAllContacts = async () => {
  const contacts = await contactsCollection.find();
  return contacts;
};

export const getContactById = async (contactId) => {
  const contact = await contactsCollection.findById(contactId);

  if (!contact) {
    throw createHttpError(404, {
      status: 404,
      message: `Student with id ${contactId} not found!`
    })
  };

  return contact;
}

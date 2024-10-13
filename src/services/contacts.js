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
      // message: `Student with id ${contactId} not found!`
      message: 'Contact not found',
    });
  }

  return contact;
};

export const createContact = async (payload) => {
  const contact = await contactsCollection.create(payload);
  return contact;
};

export const updateContact = async (contactId, payload, options = {}) => {
  try {
    const rawResult = await contactsCollection.findOneAndUpdate(
      { _id: contactId },
      payload,
      {
        new: true,
        includeResultMetadata: true,
        ...options,
      },
    );
    if (!rawResult || !rawResult.value) return null;

    return {
      contact: rawResult.value,
      isNew: Boolean(rawResult?.lastErrorObject?.upserted),
    };
  } catch (error) {
    throw new createHttpError(404, 'Contact not found');
  }
};

export const deleteContact = async (contactId) => {
  try {
    const contact = await contactsCollection.findByIdAndDelete(contactId);
    return contact;
  } catch (error) {
    throw new createHttpError(404, 'Contact not found');
  }
};

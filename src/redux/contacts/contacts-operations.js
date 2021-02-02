import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  editContactRequest,
  editContactSuccess,
  editContactError,
} from './contacts-action';

import {
  fetchContacts,
  fetchAddContact,
  fetchDeleteContact,
  fetchEditContact,
} from 'services/phonebookApi';

export const getContacts = () => async dispatch => {
  dispatch(fetchContactsRequest());

  try {
    const { data } = await fetchContacts();
    dispatch(fetchContactsSuccess(data));
  } catch (error) {
    dispatch(fetchContactsError(error));
  }
};

export const addContact = contact => async dispatch => {
  dispatch(addContactRequest());

  try {
    const { data } = await fetchAddContact(contact);
    dispatch(addContactSuccess(data));
  } catch (error) {
    dispatch(addContactError(error));
  }
};

export const deleteContact = id => async dispatch => {
  dispatch(deleteContactRequest());

  try {
    await fetchDeleteContact(id);
    dispatch(deleteContactSuccess(id));
  } catch (error) {
    dispatch(deleteContactError(error));
  }
};

export const editContact = item => async dispatch => {
  dispatch(editContactRequest());

  try {
    const { data } = await fetchEditContact(item);
    console.log(data);
    dispatch(editContactSuccess(data));
  } catch (error) {
    dispatch(editContactError(error.message));
    console.log(error);
  }
};

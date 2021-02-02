import { createReducer, combineReducers } from '@reduxjs/toolkit';
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
  addContactEdit,
  changeFilter,
} from './contacts-action';

const contactsReducer = createReducer([], {
  [fetchContactsSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(contact => {
      return contact.id !== payload;
    }),
  [editContactSuccess]: (state, { payload }) =>
    state.map(contact => (contact.id === payload.id ? payload : contact)),
});

const isLoading = createReducer(false, {
  [fetchContactsRequest]: () => true,
  [fetchContactsSuccess]: () => false,
  [fetchContactsError]: () => false,

  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,

  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,

  [editContactRequest]: () => true,
  [editContactSuccess]: () => false,
  [editContactError]: () => false,
});

const filterReducer = createReducer('', {
  [changeFilter]: (_, { payload }) => payload,
});

const edit = createReducer(null, {
  [addContactEdit]: (_, { payload }) => payload,
});

export default combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  isLoading,
  edit,
});

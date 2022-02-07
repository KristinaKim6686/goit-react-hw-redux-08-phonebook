import { configureStore, createReducer, createAction } from "@reduxjs/toolkit";

const initialState = { contactList: [] };

export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");
export const filterContactList = createAction("filter/filterContacts");

const reducer = createReducer(initialState, {
  [addContact]: (state, action) => ({
    contactList: [...state.contactList, action.payload],
  }),
  [deleteContact]: (state, action) => ({
    contactList: state.contactList.map((contact) => {
      return contact.id === action.payload.id ? action.payload : contact;
    }),
  }),
  [filterContactList]: (state, action) => ({}),
});

export const store = configureStore({
  reducer: reducer,
});

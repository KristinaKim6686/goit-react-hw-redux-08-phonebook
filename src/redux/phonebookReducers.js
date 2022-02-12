import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact, deleteContact, filterContacts } from "./phonebookActions";

const contacts = createReducer([], {
  [addContact]: (state, action) => [...state, action.payload],
  [deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});
const phonebookReducer = combineReducers({
  contacts,
  filter: filterReducer,
});
export default phonebookReducer;

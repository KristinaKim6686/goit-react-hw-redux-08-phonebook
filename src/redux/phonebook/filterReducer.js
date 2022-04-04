import { createReducer, createAction } from "@reduxjs/toolkit";

export const filterContacts = createAction("phonebook/filterContacts");

export const filterReducer = createReducer("", {
  [filterContacts]: (_, { payload }) => payload,
});

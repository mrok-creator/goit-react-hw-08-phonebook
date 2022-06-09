import { createSlice } from '@reduxjs/toolkit';

import {
  getUserContacts,
  addContact,
  removeContact,
} from 'redux/Contacts/contacts-operation';

const initialState = {
  items: [],
  loading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: {
    [getUserContacts.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [getUserContacts.fulfilled]: (state, { payload }) => ({
      ...state,
      items: payload,
      loading: false,
    }),
    [getUserContacts.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [addContact.pending]: state => ({ ...state, loading: true, error: null }),
    [addContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: [...state.items, payload],
      loading: false,
    }),
    [addContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [removeContact.pending]: state => ({
      ...state,
      loading: true,
      error: null,
    }),
    [removeContact.fulfilled]: (state, { payload }) => ({
      ...state,
      items: state.items.filter(item => item.id !== payload),
      loading: false,
    }),
    [removeContact.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export const { actions } = contactsSlice;
export default contactsSlice.reducer;

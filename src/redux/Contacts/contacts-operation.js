import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'shared/services/contacts';

export const getUserContacts = createAsyncThunk(
  'contacts/getContacts',
  async (_, { rejectWithValue }) => {
    try {
      const data = await API.getContacts();
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (contact, { rejectWithValue }) => {
    try {
      const data = await API.addContact(contact);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (contact, { getState }) => {
      const { contacts } = getState();

      const isDuplicated = contacts.items.find(
        item => item.name === contact.name
      );

      if (isDuplicated) {
        alert(`${contact.name} is already in your Phone Book`);
        return false;
      }
    },
  }
);

export const removeContact = createAsyncThunk(
  'contacts/removeContact',
  async (id, { rejectWithValue }) => {
    try {
      const data = await API.removeContact(id);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

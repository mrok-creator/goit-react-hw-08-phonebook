import { createAsyncThunk } from '@reduxjs/toolkit';

import * as API from 'shared/services/user';

export const signup = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.signup(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'user/login',
  async (data, { rejectWithValue }) => {
    try {
      const user = await API.login(data);
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  'user/getCurrentUser',
  async (_, { rejectWithValue, getState }) => {
    const { user } = getState();
    try {
      const data = await API.isCurrent(user.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  'user/logout',
  async (_, { rejectWithValue }) => {
    try {
      const user = await API.logout();
      return user;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

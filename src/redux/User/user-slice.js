import { createSlice } from '@reduxjs/toolkit';

import { signup, login } from './user-operation';

const initialState = {
  user: [],
  token: '',
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signup.pending]: state => ({ ...state, loading: true, error: null }),
    [signup.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      isLogin: true,
      ...payload,
    }),
    [signup.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),

    [login.pending]: state => ({ ...state, loading: true, error: null }),
    [login.fulfilled]: (state, { payload }) => ({
      ...state,
      loading: false,
      isLogin: true,
      ...payload,
    }),
    [login.rejected]: (state, { payload }) => ({
      ...state,
      loading: false,
      error: payload,
    }),
  },
});

export default authSlice.reducer;

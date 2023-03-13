import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, current, logOut } from './auth-operations';

const handlePending = state => {
  state.loading = true;
  state.error = null;
};

const handleReject = (state, { payload }) => {
  state.loading = false;
  state.error = payload;
};

const initialState = {
  user: {},
  token: '',
  isLoggedIn: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        if (!payload) {
          return;
        }
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, handleReject)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.rejected, handleReject)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        if (!payload) {
          return;
        }

        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(current.pending, handlePending)
      .addCase(current.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.user = payload;
        state.isLoggedIn = true;
      })
      .addCase(current.rejected, handleReject)
      .addCase(logOut.pending, handlePending)
      .addCase(logOut.fulfilled, state => {
        state.isLoading = false;
        state.user = {};
        state.token = '';
        state.isLoggedIn = false;
      })
      .addCase(logOut.rejected, handleReject);
  },
});

export default authSlice.reducer;

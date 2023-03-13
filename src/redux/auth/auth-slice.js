import { createSlice } from '@reduxjs/toolkit';

import { signUp, logIn, current, logOut } from './auth-operations';

const handlePending = state => {
  return (state = {
    ...state,
    isLoading: true,
    error: null,
  });
};

const handleReject = (state, { payload }) => {
  return (state = {
    ...state,
    token: '',
    isLoading: false,
    error: payload,
  });
};

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: {},
    token: '',
    isLoggedIn: false,
    loading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(signUp.pending, handlePending)
      .addCase(signUp.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(signUp.rejected, handleReject)
      .addCase(logIn.pending, handlePending)
      .addCase(logIn.fulfilled, (state, { payload }) => {
        const { user, token } = payload;
        state.isLoading = false;
        state.user = user;
        state.token = token;
        state.isLoggedIn = true;
      })
      .addCase(logIn.rejected, handleReject)
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

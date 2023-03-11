import { createAsyncThunk } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';

import * as api from '../../api/api';

export const signUp = createAsyncThunk(
  'auth/signUp',
  async (data, thunkAPI) => {
    try {
      const result = await api.signUp(data);

      return result;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

export const logIn = createAsyncThunk('auth/logIn', async (data, thunkAPI) => {
  try {
    const result = await api.login(data);

    return result;
  } catch (error) {
    thunkAPI.rejectWithValue(error);

    return Notiflix.Notify.failure('Email and/or password is wrong');
  }
});

export const current = createAsyncThunk(
  'auth/current',
  async (_, thunkAPI) => {
    try {
      const { auth } = thunkAPI.getState();
      const data = await api.getCurrent(auth.token);
      return data;
    } catch (error) {
      thunkAPI.rejectWithValue(error);
    }
  },
  {
    condition: (_, { getState }) => {
      const { auth } = getState();
      if (!auth.token) {
        return false;
      }
    },
  }
);

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    const data = await api.logOut();
    return data;
  } catch (error) {
    thunkAPI.rejectWithValue(error);
  }
});

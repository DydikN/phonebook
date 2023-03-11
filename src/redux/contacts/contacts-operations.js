import { createAsyncThunk } from '@reduxjs/toolkit';

import Notiflix from 'notiflix';
import instance from 'api/api';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await instance.get('/contacts');
      return data;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error.message);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async (data, thunkAPI) => {
    try {
      const { data: result } = await instance.post('/contacts', data);

      return result;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error.message);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

export const deleteContact = createAsyncThunk(
  'contacts/deleteContact',
  async (id, thunkAPI) => {
    try {
      const { data } = await instance.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error.message);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

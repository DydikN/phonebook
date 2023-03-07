import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';
import Notiflix from 'notiflix';

axios.defaults.baseURL = 'https://63fce0b1859df29986c69d41.mockapi.io';

export const fetchContacts = createAsyncThunk(
  'contacts/fetchAll',
  async (_, thunkAPI) => {
    try {
      const { data } = await axios.get('/contacts');
      return data;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error.message);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

export const addContact = createAsyncThunk(
  'contacts/addContact',
  async ({ name, phone }, thunkAPI) => {
    try {
      const { data } = await axios.post('/contacts', { name, phone });
      return data;
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
      const { data } = await axios.delete(`/contacts/${id}`);
      return data;
    } catch (error) {
      const message = thunkAPI.rejectWithValue(error.message);

      return Notiflix.Notify.failure(message.payload);
    }
  }
);

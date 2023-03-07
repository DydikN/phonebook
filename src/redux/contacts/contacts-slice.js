import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, deleteContact, addContact } from 'redux/operations';

const handlePending = state => {
  return (state = {
    ...state,
    isLoading: true,
  });
};

const handleReject = (state, { payload }) => {
  return (state = {
    ...state,
    isLoading: false,
    error: payload,
  });
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items = payload;
      })
      .addCase(fetchContacts.rejected, handleReject)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.items.push(payload);
      })
      .addCase(addContact.rejected, handleReject)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(task => task.id === payload.id);
        state.items.splice(index, 1);
      })
      .addCase(deleteContact.rejected, handleReject);
  },
});

export default contactsSlice.reducer;

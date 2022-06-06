import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchDiscographyBeats } from 'shared/api/beats';

import { GET_DISCOGRAPHY_BEATS } from './constants';

const getDiscographyBeats = createAsyncThunk(
  GET_DISCOGRAPHY_BEATS,
  async (_, thunkAPI) => {
    try {
      const response = await fetchDiscographyBeats();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getDiscographyBeats };

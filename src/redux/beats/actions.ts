import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllBeats, fetchPreviewBeats } from '../../shared/api/beats';
import { GET_ALL_BEATS_NAME, GET_PREVIEW_BEATS_NAME } from './constants';

const getPreviewBeats = createAsyncThunk(
  GET_PREVIEW_BEATS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewBeats();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const getAllBeats = createAsyncThunk(
  GET_ALL_BEATS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllBeats();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewBeats, getAllBeats };

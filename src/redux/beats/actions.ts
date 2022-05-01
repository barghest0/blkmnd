import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFeaturedBeat, fetchPreviewBeats } from '../../shared/api/beats';
import { GET_PREVIEW_BEATS_NAME, GET_FEATURED_BEAT_NAME } from './constants';

const getFeaturedBeat = createAsyncThunk(
  GET_FEATURED_BEAT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchFeaturedBeat(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

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

export { getFeaturedBeat, getPreviewBeats };

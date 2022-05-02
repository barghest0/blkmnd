import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBeat, fetchFeaturedBeat, } from '../../shared/api/beats';
import {
  GET_FEATURED_BEAT_NAME,
  GET_BEAT_NAME,
} from './constants';

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

const getBeat = createAsyncThunk(
  GET_BEAT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchBeat(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getFeaturedBeat, getBeat };

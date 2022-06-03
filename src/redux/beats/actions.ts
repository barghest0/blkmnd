import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllBeats,
  fetchBeat,
  fetchFeaturedBeat,
  fetchFilteredBeats,
  fetchPreviewBeats,
  putBeat,
} from '../../shared/api/beats';
import {
  GET_ALL_BEATS_NAME,
  GET_BEAT_NAME,
  GET_FEATURED_BEAT_NAME,
  GET_FILTERED_BEATS_NAME,
  GET_PREVIEW_BEATS_NAME,
  UPDATE_BEAT_NAME,
} from './constants';
import { FiltersState } from './types';

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

const getFilteredBeats = createAsyncThunk(
  GET_FILTERED_BEATS_NAME,
  async (filters: Partial<FiltersState>, thunkAPI) => {
    try {
      const response = await fetchFilteredBeats(filters);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

const getFeaturedBeat = createAsyncThunk(
  GET_FEATURED_BEAT_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchFeaturedBeat();
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

const updateBeat = createAsyncThunk(UPDATE_BEAT_NAME, async (_, thunkAPI) => {
  try {
    const beat = thunkAPI.getState().beats.beat;
    const response = await putBeat(beat);
    return response.data;
  } catch (e) {
    thunkAPI.rejectWithValue(e);
  }
});

export {
  getPreviewBeats,
  getAllBeats,
  getFilteredBeats,
  getFeaturedBeat,
  getBeat,
  updateBeat,
};

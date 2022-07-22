import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchFeaturedBeat, fetchPreviewBeats } from 'shared/api/beats';
import { fetchPreviewServices } from 'shared/api/services';
import { fetchLicenses } from 'shared/api/licenses';
import { fetchPreviewSoundKits } from 'shared/api/sound-kits';
import {
  GET_FEATURED_BEAT_NAME,
  GET_LICENSES_NAME,
  GET_PREVIEW_BEATS_NAME,
  GET_PREVIEW_COLLABS_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
} from './constants';

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

const getLicenses = createAsyncThunk(GET_LICENSES_NAME, async (_, thunkAPI) => {
  try {
    const response = await fetchLicenses();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

const getPreviewSoundKits = createAsyncThunk(
  GET_PREVIEW_SOUND_KITS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewSoundKits();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const getPreviewServices = createAsyncThunk(
  GET_PREVIEW_COLLABS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewServices();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export {
  getPreviewBeats,
  getFeaturedBeat,
  getLicenses,
  getPreviewSoundKits,
  getPreviewServices,
};

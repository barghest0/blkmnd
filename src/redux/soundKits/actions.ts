import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllSoundKits,
  fetchPreviewSoundKits,
} from '../../shared/api/soundKits';
import {
  GET_ALL_SOUND_KITS_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
} from './constants';

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

const getAllSoundKits = createAsyncThunk(
  GET_ALL_SOUND_KITS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllSoundKits();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewSoundKits, getAllSoundKits };

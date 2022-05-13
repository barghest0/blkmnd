import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllSoundKits,
  fetchPreviewSoundKits,
  fetchSoundKit,
} from '../../shared/api/soundKits';
import {
  GET_ALL_SOUND_KITS_NAME,
  GET_PREVIEW_SOUND_KITS_NAME,
  GET_SOUND_KIT_NAME,
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

const getSoundKit = createAsyncThunk(
  GET_SOUND_KIT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchSoundKit(id);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);
export { getPreviewSoundKits, getAllSoundKits, getSoundKit };

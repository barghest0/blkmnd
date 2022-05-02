import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPreviewSoundKits } from '../../shared/api/soundKits';
import { GET_PREVIEW_SOUND_KITS } from './constants';

const getPreviewSoundKits = createAsyncThunk(
  GET_PREVIEW_SOUND_KITS,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewSoundKits();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewSoundKits };

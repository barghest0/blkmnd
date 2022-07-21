import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllSoundKits } from 'shared/api/soundKits';

import { GET_ALL_SOUND_KITS_NAME } from './constants';

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

export { getAllSoundKits };

import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchSoundKit, putSoundKit } from 'shared/api/soundKits';

import { GET_SOUND_KIT_NAME, UPDATE_SOUND_KIT_NAME } from './constants';

const getSoundKit = createAsyncThunk(
  GET_SOUND_KIT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchSoundKit(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const updateSoundKit = createAsyncThunk(
  UPDATE_SOUND_KIT_NAME,
  async (_, thunkAPI) => {
    try {
      const { soundKit } = thunkAPI.getState().soundKitDetails;
      const response = await putSoundKit(soundKit);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getSoundKit, updateSoundKit };

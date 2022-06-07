import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchPreviewBeats } from 'shared/api/beats';

import { GET_PLAYER_QUEUE_BEATS } from './constants';

const getQueueBeats = createAsyncThunk(
  GET_PLAYER_QUEUE_BEATS,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewBeats();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getQueueBeats };

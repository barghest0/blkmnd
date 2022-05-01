import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPreviewBeat } from '../../shared/api/beats';
import { GET_PREVIEW_BEAT_NAME } from './constants';

const getPreviewBeat = createAsyncThunk(
  GET_PREVIEW_BEAT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchPreviewBeat(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewBeat };

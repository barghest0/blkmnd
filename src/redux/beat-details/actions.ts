import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBeat, putBeat } from 'shared/api/beats';
import { GET_BEAT_NAME, UPDATE_BEAT_NAME } from './constants';

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
    const { beat } = thunkAPI.getState().beats;
    const response = await putBeat(beat);
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export { getBeat, updateBeat };

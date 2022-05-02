import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPreviewBeats } from '../../shared/api/beats';
import {
  GET_PREVIEW_BEATS_NAME,
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



export { getPreviewBeats };

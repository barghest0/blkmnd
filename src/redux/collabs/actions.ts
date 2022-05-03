import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchPreviewCollabs } from '../../shared/api/collabs';
import { GET_PREVIEW_COLLABS_NAME } from './constants';

const getPreviewCollabs = createAsyncThunk(
  GET_PREVIEW_COLLABS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchPreviewCollabs();
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewCollabs };

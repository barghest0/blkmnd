import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  fetchAllCollabs,
  fetchCollab,
  fetchPreviewCollabs,
} from '../../shared/api/collabs';
import {
  GET_ALL_COLABS_NAME,
  GET_COLLAB_NAME,
  GET_PREVIEW_COLLABS_NAME,
} from './constants';

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
const getAllCollabs = createAsyncThunk(
  GET_ALL_COLABS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllCollabs();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const getCollab = createAsyncThunk(
  GET_COLLAB_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchCollab(id);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { getPreviewCollabs, getAllCollabs, getCollab };

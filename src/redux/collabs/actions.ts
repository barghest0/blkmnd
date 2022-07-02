import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllCollabs, fetchCollab } from 'shared/api/collabs';

import { GET_ALL_COLABS_NAME, GET_COLLAB_NAME } from './constants';

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
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getAllCollabs, getCollab };

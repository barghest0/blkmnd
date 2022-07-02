import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllBeats, fetchFilteredBeats } from 'shared/api/beats';

import { GET_ALL_BEATS_NAME, GET_FILTERED_BEATS_NAME } from './constants';
import { FiltersState } from './types';

const getAllBeats = createAsyncThunk(
  GET_ALL_BEATS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllBeats();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const getFilteredBeats = createAsyncThunk(
  GET_FILTERED_BEATS_NAME,
  async (filters: Partial<FiltersState>, thunkAPI) => {
    try {
      const response = await fetchFilteredBeats(filters);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getAllBeats, getFilteredBeats };

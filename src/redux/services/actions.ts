import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchAllServices } from 'shared/api/services';

import { GET_ALL_SERVICES_NAME } from './constants';

const getAllServices = createAsyncThunk(
  GET_ALL_SERVICES_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllServices();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getAllServices };

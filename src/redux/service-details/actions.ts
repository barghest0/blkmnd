import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchService } from 'shared/api/services';

import { GET_SERVICE_DETAILS_NAME } from './constants';

const getServiceDetails = createAsyncThunk(
  GET_SERVICE_DETAILS_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchService(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getServiceDetails };

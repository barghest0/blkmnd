import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLicense } from 'shared/api/licenses';

import { GET_LICENSE_NAME } from './constants';

const getLicense = createAsyncThunk(
  GET_LICENSE_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchLicense(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getLicense };

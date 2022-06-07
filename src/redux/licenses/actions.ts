import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchLicense, fetchLicenses } from 'shared/api/licenses';

import { GET_LICENSES_NAME, GET_LICENSE_NAME } from './constants';

const getLicenses = createAsyncThunk(GET_LICENSES_NAME, async (_, thunkAPI) => {
  try {
    const response = await fetchLicenses();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

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

export { getLicenses, getLicense };

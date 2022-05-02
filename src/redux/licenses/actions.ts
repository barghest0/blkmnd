import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchLicenses } from '../../shared/api/licenses';
import { GET_LICENSES_NAME } from './constants';

const getLicenses = createAsyncThunk(GET_LICENSES_NAME, async (_, thunkAPI) => {
  try {
    const response = await fetchLicenses();
    return response.data;
  } catch (e) {
    return thunkAPI.rejectWithValue(e);
  }
});

export { getLicenses };

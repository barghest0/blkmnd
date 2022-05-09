import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchAllMemberships } from '../../shared/api/memberships';
import { GET_MEMBERSHIPS_NAME } from './constants';

const getMemberships = createAsyncThunk(
  GET_MEMBERSHIPS_NAME,
  async (_, thunkAPI) => {
    try {
      const response = await fetchAllMemberships();
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { getMemberships };

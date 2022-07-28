import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUserData } from 'shared/api/auth';

import { GET_PROFILE_DATA_NAME } from './constants';

const getProfileData = createAsyncThunk(
  GET_PROFILE_DATA_NAME,
  async (token: string | null, thunkAPI) => {
    try {
      const response = await fetchUserData(token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getProfileData };

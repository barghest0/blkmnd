import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchUserData } from 'shared/api/auth';

import { GET_USER_DATA_NAME } from './constants';

const getUserData = createAsyncThunk(
  GET_USER_DATA_NAME,
  async (token: string | null, thunkAPI) => {
    try {
      const response = await fetchUserData(token);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getUserData };

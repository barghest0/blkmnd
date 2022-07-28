import { createAsyncThunk } from '@reduxjs/toolkit';

import { fetchBeat } from 'shared/api/beats';
import { fetchLicense } from 'shared/api/licenses';

import { GET_MODALS_LICENSE_NAME, GET_MODALS_BEAT_NAME } from './constants';

const getModalLicense = createAsyncThunk(
  GET_MODALS_LICENSE_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchLicense(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

const getModalBeat = createAsyncThunk(
  GET_MODALS_BEAT_NAME,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchBeat(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e);
    }
  },
);

export { getModalLicense, getModalBeat };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchBeat } from '../../shared/api/beats';
import { fetchLicense } from '../../shared/api/licenses';
import { GET_MODALS_BEAT, GET_MODALS_LICENSE } from './constants';

const getModalBeat = createAsyncThunk(
  GET_MODALS_BEAT,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchBeat(id);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

const getModalLicense = createAsyncThunk(
  GET_MODALS_LICENSE,
  async (id: number, thunkAPI) => {
    try {
      const response = await fetchLicense(id);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { getModalBeat, getModalLicense };

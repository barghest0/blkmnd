import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, registerRequest } from '../../shared/api/auth';
import { LOGIN_NAME, REGISTER_NAME } from './constants';
import { LoginValues, RegisterValues } from './types';

const register = createAsyncThunk(
  REGISTER_NAME,
  async (userData: RegisterValues, thunkAPI) => {
    try {
      const response = await registerRequest(userData);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

const login = createAsyncThunk(
  LOGIN_NAME,
  async (userData: LoginValues, thunkAPI) => {
    try {
      const response = await loginRequest(userData);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { register, login };

import { createAsyncThunk } from '@reduxjs/toolkit';
import { loginRequest, registerRequest } from '../../shared/api/auth';
import { fetchUserData } from '../../shared/api/user';
import { AUTO_LOGIN_NAME, LOGIN_NAME, REGISTER_NAME } from './constants';
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
    } catch (exception) {
      console.log(exception.response.data);

      thunkAPI.rejectWithValue(exception.response.data);
    }
  },
);

const autoLogin = createAsyncThunk(
  AUTO_LOGIN_NAME,
  async (token: string | null, thunkAPI) => {
    try {
      const response = await fetchUserData(token);
      return response.data;
    } catch (e) {
      thunkAPI.rejectWithValue(e);
    }
  },
);

export { register, login, autoLogin };

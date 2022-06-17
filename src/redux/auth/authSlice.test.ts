import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockUser } from 'test-utils/mocks';
import * as authApi from 'shared/api/auth';
import * as userApi from 'shared/api/user';

import authSlice from './authSlice';
import { autoLogin, login, register } from './actions';
import { AUTH_INITIAL_STATE, AUTH_SLICE_NAME } from './constants';

const state = authSlice.getInitialState();

describe('authSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(authSlice.getInitialState()).toEqual(AUTH_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(authSlice.name).toEqual(AUTH_SLICE_NAME);
  });
});

describe('correct register authSlice with mock action payload', () => {
  test('expect correct fulfilled register', () => {
    const action = { type: register.fulfilled.type };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isRegisterSuccess: true,
    });
  });

  test('expect set isFetching during register pending', () => {
    const action = { type: register.pending.type };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected register', () => {
    const registerErrors = { username: ['Пользователь уже существует'] };
    const action = {
      type: register.rejected.type,
      payload: registerErrors,
    };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      registerErrors,
    });
  });
});

describe('correct login authSlice with mock action payload', () => {
  test('expect correct fulfilled login', () => {
    const loginValues = { id: 1, token: '5uio12nmkwfk24', user_id: 1 };
    const action = { type: login.fulfilled.type, payload: loginValues };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isLoginSuccess: true,
      token: loginValues.token,
      isAuth: true,
    });
  });

  test('expect set isFetching during login pending', () => {
    const action = { type: login.pending.type };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected login', () => {
    const action = {
      type: login.rejected.type,
      payload: { username: ['Пользователь не существует'] },
    };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      loginErrors: { username: ['Пользователь не существует'] },
    });
  });
});

describe('correct autoLogin authSlice with mock action payload', () => {
  test('expect correct fulfilled auto login', () => {
    const action = { type: autoLogin.fulfilled.type, payload: mockUser };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      user: mockUser,
      isAuth: true,
    });
  });

  test('expect set isFetching during auto login pending', () => {
    const action = { type: autoLogin.pending.type };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected auto login', () => {
    const action = {
      type: autoLogin.rejected.type,
      payload: { username: ['Пользователь не существует'] },
    };
    const newState = authSlice.reducer(state, action);
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      loginErrors: { username: ['Пользователь не существует'] },
    });
  });
});

describe('correct logout authSlice', () => {
  test('expect correct logout', () => {
    const newState = authSlice.reducer(state, authSlice.actions.logout());
    expect(newState).toEqual({
      ...authSlice.getInitialState(),
      isAuth: false,
      token: null,
      user: null,
    });
  });
});

jest.mock('../../shared/api/auth');
jest.mock('../../shared/api/user');
const mockAuthApi = authApi as jest.Mocked<typeof authApi>;
const mockUserApi = userApi as jest.Mocked<typeof userApi>;

const authUserData = {
  username: 'username',
  password: 'password',
  confirmPassword: 'password',
};

describe('resolved auth actions with async thunk', () => {
  test('expect resolved register response', async () => {
    const mockData = {
      data: [mockUser],
    };

    mockAuthApi.registerRequest.mockResolvedValueOnce(mockData);
    const user = await mockDispatch(register(authUserData));

    await waitFor(() => {
      expect(user.payload).toEqual([mockUser]);
      expect(mockAuthApi.registerRequest).toBeCalled();
    });
  });

  test('expect resolved login response', async () => {
    const mockData = {
      data: [mockUser],
    };

    mockAuthApi.loginRequest.mockResolvedValueOnce(mockData);
    const user = await mockDispatch(login(authUserData));

    await waitFor(() => {
      expect(user.payload).toEqual([mockUser]);
      expect(mockAuthApi.loginRequest).toBeCalled();
    });
  });

  test('expect resolved auto login response', async () => {
    const mockData = {
      data: [mockUser],
    };

    mockUserApi.fetchUserData.mockResolvedValueOnce(mockData);
    const user = await mockDispatch(autoLogin('askldjnk14'));

    await waitFor(() => {
      expect(user.payload).toEqual([mockUser]);
      expect(mockUserApi.fetchUserData).toBeCalled();
    });
  });
});

describe('rejected auth actions with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected register response', async () => {
    const mockData = {
      error: 'error',
    };

    mockAuthApi.registerRequest.mockRejectedValue(mockData);
    const rejectedRegisterResponse = await mockDispatch(register(authUserData));

    await waitFor(() => {
      expect(rejectedRegisterResponse.payload).toEqual(mockData);
    });
  });

  test('expect rejected login response', async () => {
    const mockData = {
      response: {
        data: {
          error: 'error',
        },
      },
    };

    mockAuthApi.loginRequest.mockRejectedValue(mockData);
    const rejectedLoginResponse = await mockDispatch(login(authUserData));

    await waitFor(() => {
      expect(rejectedLoginResponse.payload).toEqual(mockData.response.data);
    });
  });

  test('expect rejected auto login response', async () => {
    const mockData = {
      error: 'error',
    };
    mockUserApi.fetchUserData.mockRejectedValue(mockData);
    const user = await mockDispatch(autoLogin('askldjnk14'));

    await waitFor(() => {
      expect(user.payload).toEqual(mockData);
      expect(mockUserApi.fetchUserData).toBeCalled();
    });
  });
});

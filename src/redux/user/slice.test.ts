import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockUser } from 'test-utils/mocks';
import * as authApi from 'shared/api/auth';

import userSlice from './slice';
import { getUserData } from './actions';
import { USER_INITIAL_STATE, USER_SLICE_NAME } from './constants';

const state = userSlice.getInitialState();

describe('userSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(USER_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(userSlice.name).toEqual(USER_SLICE_NAME);
  });
});

describe('correct set userSlice user data with mock action payload', () => {
  test('expect correct fulfilled user data', () => {
    const action = { type: getUserData.fulfilled.type, payload: mockUser };
    const newState = userSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      user: mockUser,
    });
  });

  test('expect set isFetching during user data pending', () => {
    const action = { type: getUserData.pending.type };
    const newState = userSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get user data', () => {
    const action = { type: getUserData.rejected.type, payload: 'error' };
    const newState = userSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/auth');
const mockAuthApi = authApi as jest.Mocked<typeof authApi>;

describe('resolved get user data with async thunk', () => {
  test('expect resolved get user data response', async () => {
    const mockData = {
      data: mockUser,
    };
    mockAuthApi.fetchUserData.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getUserData('1241sd24'));

    await waitFor(() => {
      expect(beats.payload).toEqual(mockUser);
      expect(mockAuthApi.fetchUserData).toBeCalled();
    });
  });
});

describe('rejected get user data with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected user data response', async () => {
    const mockData = {
      error: 'error',
    };
    mockAuthApi.fetchUserData.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getUserData('1241sd24'));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});

import { mockUser } from 'test-utils/mocks';

import { getUserData } from './actions';
import { USER_INITIAL_STATE, USER_SLICE_NAME } from './constants';
import userSlice from './userSlice';

const state = userSlice.getInitialState();

describe('userSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(userSlice.getInitialState()).toEqual(USER_INITIAL_STATE);
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
      ...userSlice.getInitialState(),
      user: mockUser,
    });
  });

  test('expect set isFetching during user data pending', () => {
    const action = { type: getUserData.pending.type };
    const newState = userSlice.reducer(state, action);
    expect(newState).toEqual({
      ...userSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected get user data', () => {
    const action = { type: getUserData.rejected.type, payload: 'error' };
    const newState = userSlice.reducer(state, action);
    expect(newState).toEqual({
      ...userSlice.getInitialState(),
      errors: 'error',
    });
  });
});

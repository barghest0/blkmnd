import { waitFor } from '@testing-library/react';
import store from 'reduxStore/store';
import { getUserData } from './actions';
import { USER_INITIAL_STATE, USER_SLICE_NAME } from './constants';
import userSlice from './userSlice';

const mockStore = store();
const { dispatch } = mockStore;
const state = mockStore.getState().user;

describe('userSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(userSlice.getInitialState()).toEqual(USER_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(userSlice.name).toEqual(USER_SLICE_NAME);
  });
});

describe('userSlice extra reducers tests', () => {
  test('expect correct get user data', async () => {
    try {
      await dispatch(getUserData('8TToQ8qnzERgrd0d_3RuDQvE1SxDKwuv'));
      waitFor(() => {
        expect(state.user?.username).toBe('test');
      });
    } catch (e) {
      expect(e).toThrow();
      expect(state.user).toBeNull();
    }
  });
});

import { mockMembership } from 'test-utils/mocks';

import { getMemberships } from './actions';
import { MEMBERSHIPS_INITIAL_STATE, MEMBERSHIPS_SLICE_NAME } from './constants';
import membershipsSlice from './membershipsSlice';

const state = membershipsSlice.getInitialState();

describe('membershipsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(MEMBERSHIPS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(membershipsSlice.name).toEqual(MEMBERSHIPS_SLICE_NAME);
  });
});

describe('correct set membershipsSlice memberships beats with mock action payload', () => {
  test('expect set correct fulfilled memberships', () => {
    const action = {
      type: getMemberships.fulfilled.type,
      payload: [mockMembership],
    };
    const newState = membershipsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      memberships: [mockMembership],
    });
  });

  test('expect set isFetching during memberships pending', () => {
    const action = { type: getMemberships.pending.type };
    const newState = membershipsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get memberships', () => {
    const action = { type: getMemberships.rejected.type, payload: 'error' };
    const newState = membershipsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

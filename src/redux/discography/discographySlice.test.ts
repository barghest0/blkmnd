import { mockBeat } from 'test-utils/mocks';

import { getDiscographyBeats } from './actions';
import { DISCOGRAPHY_INITIAL_STATE, DISCORGAPHY_SLICE_NAME } from './constants';
import discographySlice from './discographySlice';

const state = discographySlice.getInitialState();

describe('discographySlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(DISCOGRAPHY_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(discographySlice.name).toEqual(DISCORGAPHY_SLICE_NAME);
  });
});

describe('correct set discographySlice all discography beats with mock action payload', () => {
  test('expect set correct fulfilled discography beats', () => {
    const action = {
      type: getDiscographyBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during discography beats pending', () => {
    const action = { type: getDiscographyBeats.pending.type };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get discography beats', () => {
    const action = {
      type: getDiscographyBeats.rejected.type,
      payload: 'error',
    };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

import { mockBeat } from 'test-utils/mocks';

import { getDiscographyBeats } from './actions';
import { DISCOGRAPHY_INITIAL_STATE, DISCORGAPHY_SLICE_NAME } from './constants';
import discographySlice from './discographySlice';

const state = discographySlice.getInitialState();

describe('discographySlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(discographySlice.getInitialState()).toEqual(
      DISCOGRAPHY_INITIAL_STATE,
    );
  });
  test('expect set correct slice name', () => {
    expect(discographySlice.name).toEqual(DISCORGAPHY_SLICE_NAME);
  });
});

describe('correct set discographySlice all beats with mock action payload', () => {
  test('expect set correct fulfilled all beats', () => {
    const action = {
      type: getDiscographyBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...discographySlice.getInitialState(),
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during all beats pending', () => {
    const action = { type: getDiscographyBeats.pending.type };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...discographySlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all beats', () => {
    const action = {
      type: getDiscographyBeats.rejected.type,
      payload: 'error',
    };
    const newState = discographySlice.reducer(state, action);
    expect(newState).toEqual({
      ...discographySlice.getInitialState(),
      errors: 'error',
    });
  });
});

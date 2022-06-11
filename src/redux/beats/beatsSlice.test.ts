import { waitFor } from '@testing-library/react';
import store from 'reduxStore/store';

import beatsSlice from './beatsSlice';
import { getAllBeats, getBeat, getFeaturedBeat } from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const mockStore = store();
const { dispatch } = mockStore;
const state = mockStore.getState().beats;

describe('beatsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(beatsSlice.getInitialState()).toEqual(BEATS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(beatsSlice.name).toEqual(BEATS_SLICE_NAME);
  });
});

describe('beatsSlice extra reducers tests', () => {
  test('expect correct get all beats', async () => {
    try {
      await dispatch(getAllBeats());
      waitFor(() => {
        expect(state.beats.length).toBeGreaterThan(0);
        expect(state.isFetching).toBe(false);
      });
    } catch (e) {
      expect(e).toThrow();
      expect(state.beats.length).toBe(0);
      expect(state.isFetching).toBe(false);
    }
  });

  test('expect correct get separated beats', async () => {
    try {
      await dispatch(getBeat(1));
      await dispatch(getFeaturedBeat());
      waitFor(() => {
        expect(state.beat).not.toBeNull();
        expect(state.featuredBeat).not.toBeNull();
      });
    } catch (e) {
      expect(e).toThrow();
      expect(state.beat).toBeNull();
      expect(state.featuredBeat).toBeNull();
    }
  });
});

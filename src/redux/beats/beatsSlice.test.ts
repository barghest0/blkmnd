import { waitFor } from '@testing-library/react';
import store from 'reduxStore/store';

import { mockBeat } from 'test-utils/mocks';

import beatsSlice from './beatsSlice';
import { getAllBeats, getBeat, getFeaturedBeat } from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const mockStore = store();
const { dispatch } = mockStore;
const state = beatsSlice.getInitialState();

describe('beatsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(beatsSlice.getInitialState()).toEqual(BEATS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(beatsSlice.name).toEqual(BEATS_SLICE_NAME);
  });
});

describe('beatsSlice extra reducers tests', () => {
  test('expect correct fulfilled all beats', () => {
    const action = { type: getAllBeats.fulfilled.type, payload: [mockBeat] };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during beats pending', () => {
    const action = { type: getAllBeats.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected get beats', () => {
    const action = { type: getAllBeats.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      errors: 'error',
    });
  });

  test('expect correct fulfilled separated beats', () => {
    const action = { type: getBeat.fulfilled.type, payload: mockBeat };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      beat: mockBeat,
    });
  });

  test('expect set isFetching during beat pending', () => {
    const action = { type: getBeat.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected get beat', () => {
    const action = { type: getBeat.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      errors: 'error',
    });
  });

  test('expect correct fulfilled featured beat', () => {
    const action = {
      type: getFeaturedBeat.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      featuredBeat: mockBeat,
    });
  });

  test('expect set isFetching during featured beat pending', () => {
    const action = { type: getFeaturedBeat.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      isFetching: true,
    });
  });

  test('expect set errors after rejected get featured beat', () => {
    const action = { type: getFeaturedBeat.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...beatsSlice.getInitialState(),
      errors: 'error',
    });
  });
});

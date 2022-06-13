import { mockCollab } from 'test-utils/mocks';

import collabsSlice from './collabsSlice';
import { getAllCollabs, getCollab, getPreviewCollabs } from './actions';
import { COLLABS_INITIAL_STATE, COLLABS_SLICE_NAME } from './constants';

const state = collabsSlice.getInitialState();

describe('collabsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(COLLABS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(collabsSlice.name).toEqual(COLLABS_SLICE_NAME);
  });
});

describe('correct set collabsSlice all collabs with mock action payload', () => {
  test('expect set correct fulfilled all collabs', () => {
    const action = {
      type: getAllCollabs.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collabs: [mockCollab],
    });
  });

  test('expect set isFetching during all collabs pending', () => {
    const action = { type: getAllCollabs.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all collabs', () => {
    const action = { type: getAllCollabs.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set collabsSlice preview collabs with mock action payload', () => {
  test('expect set correct fulfilled preview collabs', () => {
    const action = {
      type: getPreviewCollabs.fulfilled.type,
      payload: [mockCollab],
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collabs: [mockCollab],
    });
  });

  test('expect set isFetching during preview collabs pending', () => {
    const action = { type: getPreviewCollabs.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get preview collabs', () => {
    const action = { type: getPreviewCollabs.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set collabsSlice collab with mock action payload', () => {
  test('expect set correct fulfilled collab', () => {
    const action = {
      type: getCollab.fulfilled.type,
      payload: mockCollab,
    };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      collab: mockCollab,
    });
  });

  test('expect set isFetching during collab pending', () => {
    const action = { type: getCollab.pending.type };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get collab', () => {
    const action = { type: getCollab.rejected.type, payload: 'error' };
    const newState = collabsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

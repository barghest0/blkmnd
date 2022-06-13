import { mockLicense } from 'test-utils/mocks';

import licensesSlice from './licensesSlice';
import { getLicense, getLicenses } from './actions';
import { LICENSE_INITIAL_STATE, LICENSE_SLICE_NAME } from './constants';

const state = licensesSlice.getInitialState();

describe('licensesSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(LICENSE_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(licensesSlice.name).toEqual(LICENSE_SLICE_NAME);
  });
});

describe('correct set licensesSlice all licenses with mock action payload', () => {
  test('expect set correct fulfilled licenses', () => {
    const action = {
      type: getLicenses.fulfilled.type,
      payload: [mockLicense],
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      licenses: [mockLicense],
    });
  });

  test('expect set isFetching during licenses pending', () => {
    const action = { type: getLicenses.pending.type };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get licenses beats', () => {
    const action = {
      type: getLicenses.rejected.type,
      payload: 'error',
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set licensesSlice license with mock action payload', () => {
  test('expect set correct fulfilled license', () => {
    const action = {
      type: getLicense.fulfilled.type,
      payload: mockLicense,
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      license: mockLicense,
    });
  });

  test('expect set isFetching during license pending', () => {
    const action = { type: getLicense.pending.type };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get license beats', () => {
    const action = {
      type: getLicense.rejected.type,
      payload: 'error',
    };
    const newState = licensesSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});
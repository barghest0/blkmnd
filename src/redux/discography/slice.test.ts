import { waitFor } from '@testing-library/react';

import { mockBeat } from 'test-utils/mocks';
import { mockDispatch } from 'test-utils/utils';
import * as beatsApi from 'shared/api/beats';

import discographySlice from './slice';
import { getDiscographyBeats } from './actions';
import { DISCOGRAPHY_INITIAL_STATE, DISCORGAPHY_SLICE_NAME } from './constants';

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

jest.mock('shared/api/beats');
const mockBeatsApi = beatsApi as jest.Mocked<typeof beatsApi>;

describe('resolved get discography beats with async thunk', () => {
  test('expect resolved get all beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchDiscographyBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getDiscographyBeats());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchDiscographyBeats).toBeCalled();
    });
  });
});

describe('rejected get discography beats with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchDiscographyBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getDiscographyBeats());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});

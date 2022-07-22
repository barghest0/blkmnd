import { waitFor } from '@testing-library/react';

import { mockBeat } from 'test-utils/mocks';
import { mockDispatch } from 'test-utils/utils';
import * as beatsApi from 'shared/api/beats';

import slice from './slice';
import { getAllBeats, getFilteredBeats } from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const state = slice.getInitialState();

describe('beats slice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(BEATS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(slice.name).toEqual(BEATS_SLICE_NAME);
  });
});

describe('correct set beats slice all beats with mock action payload', () => {
  test('expect set correct fulfilled all beats', () => {
    const action = { type: getAllBeats.fulfilled.type, payload: [mockBeat] };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during all beats pending', () => {
    const action = { type: getAllBeats.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all beats', () => {
    const action = { type: getAllBeats.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beats slice filtered beats with mock action payload', () => {
  test('expect set correct fulfilled filtered beats', () => {
    const action = {
      type: getFilteredBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during filtered beats pending', () => {
    const action = { type: getFilteredBeats.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get  filtered beats', () => {
    const action = { type: getFilteredBeats.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/beats');
const mockBeatsApi = beatsApi as jest.Mocked<typeof beatsApi>;

describe('resolved get beats with async thunk', () => {
  test('expect resolved get all beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchAllBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getAllBeats());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchAllBeats).toBeCalled();
    });
  });

  test('expect resolved get filtered beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchFilteredBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getFilteredBeats({ search: '' }));

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchFilteredBeats).toBeCalledWith({ search: '' });
    });
  });
});

describe('rejected get beats with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchAllBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getAllBeats());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected filtered beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchFilteredBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getFilteredBeats({ search: '' }));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });
});

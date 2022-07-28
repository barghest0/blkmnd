import { waitFor } from '@testing-library/react';

import { mockBeat, mockComment } from 'test-utils/mocks';
import { mockDispatch } from 'test-utils/utils';
import * as beatsApi from 'shared/api/beats';

import { getBeatDetails, updateBeatDetails } from './actions';
import slice from './slice';

const state = slice.getInitialState();
const { pushNewBeatComment } = slice.actions;

describe('correct update beat details slice beat with mock action payload', () => {
  test('expect update correct fulfilled beat', () => {
    const action = {
      type: updateBeatDetails.fulfilled.type,
      payload: mockBeat,
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beat: mockBeat,
    });
  });

  test('expect set isFetching during update beat pending', () => {
    const action = { type: updateBeatDetails.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isBeatFetching: true,
    });
  });

  test('expect set errors after rejected update beat', () => {
    const action = { type: updateBeatDetails.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beat details slice beat with mock action payload', () => {
  test('expect set correct fulfilled beat', () => {
    const action = { type: getBeatDetails.fulfilled.type, payload: mockBeat };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beat: mockBeat,
    });
  });

  test('expect set isFetching during beat pending', () => {
    const action = { type: getBeatDetails.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isBeatFetching: true,
    });
  });

  test('expect set errors after rejected get beat details', () => {
    const action = { type: getBeatDetails.rejected.type, payload: 'error' };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct performance beat details slice actions with mock action payload', () => {
  test('expect correct push beat comment', () => {
    const action = {
      type: getBeatDetails.fulfilled.type,
      payload: mockBeat,
    };

    const stateWithBeat = slice.reducer(state, action);
    const newState = slice.reducer(
      stateWithBeat,
      pushNewBeatComment(mockComment),
    );
    expect(newState.beat?.comments).toContain(mockComment);
  });
});

jest.mock('shared/api/beats');
const mockBeatsApi = beatsApi as jest.Mocked<typeof beatsApi>;

describe('resolved get beat details with async thunk', () => {
  test('expect resolved get beat details response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.fetchBeat.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getBeatDetails(1));

    await waitFor(() => {
      expect(beats.payload).toEqual(mockBeat);
      expect(mockBeatsApi.fetchBeat).toBeCalledWith(1);
    });
  });

  test('expect resolved update beat details response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.putBeat.mockResolvedValueOnce(mockData);
    const beat = await mockDispatch(updateBeatDetails());

    await waitFor(() => {
      expect(beat.payload).toEqual(mockBeat);
      expect(mockBeatsApi.putBeat).toBeCalled();
    });
  });
});

describe('rejected get beat details with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected beat details response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchBeat.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getBeatDetails(1));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected update beat details response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.putBeat.mockRejectedValue(mockData);
    const rejectedBeat = await mockDispatch(updateBeatDetails());

    await waitFor(() => {
      expect(rejectedBeat.payload).toEqual(mockData);
    });
  });
});

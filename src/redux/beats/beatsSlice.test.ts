import { waitFor } from '@testing-library/react';

import { mockBeat, mockComment } from 'test-utils/mocks';
import { mockDispatch } from 'test-utils/utils';
import * as beatsApi from 'shared/api/beats';

import beatsSlice from './beatsSlice';
import {
  getAllBeats,
  getBeat,
  getFeaturedBeat,
  getFilteredBeats,
  getPreviewBeats,
  updateBeat,
} from './actions';
import { BEATS_INITIAL_STATE, BEATS_SLICE_NAME } from './constants';

const state = beatsSlice.getInitialState();
const { pushNewBeatComment } = beatsSlice.actions;

describe('beatsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(BEATS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(beatsSlice.name).toEqual(BEATS_SLICE_NAME);
  });
});

describe('correct set beatsSlice all beats with mock action payload', () => {
  test('expect set correct fulfilled all beats', () => {
    const action = { type: getAllBeats.fulfilled.type, payload: [mockBeat] };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during all beats pending', () => {
    const action = { type: getAllBeats.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all beats', () => {
    const action = { type: getAllBeats.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beatsSlice preview beats with mock action payload', () => {
  test('expect set correct fulfilled preview beats', () => {
    const action = {
      type: getPreviewBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during preview beats pending', () => {
    const action = { type: getPreviewBeats.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get preview beats', () => {
    const action = { type: getPreviewBeats.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct update beatsSlice beat with mock action payload', () => {
  test('expect update correct fulfilled beat', () => {
    const action = {
      type: updateBeat.fulfilled.type,
      payload: mockBeat,
    };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beat: mockBeat,
    });
  });

  test('expect isFetching during update beat pending', () => {
    const action = { type: updateBeat.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected update beat', () => {
    const action = { type: updateBeat.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beatsSlice beat with mock action payload', () => {
  test('expect set correct fulfilled beat', () => {
    const action = { type: getBeat.fulfilled.type, payload: mockBeat };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beat: mockBeat,
    });
  });

  test('expect set isFetching during beat pending', () => {
    const action = { type: getBeat.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get beat', () => {
    const action = { type: getBeat.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beatsSlice featured beat with mock action payload', () => {
  test('expect set correct fulfilled featured beat', () => {
    const action = {
      type: getFeaturedBeat.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      featuredBeat: mockBeat,
    });
  });

  test('expect set isFetching during featured beat pending', () => {
    const action = { type: getFeaturedBeat.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get featured beat', () => {
    const action = { type: getFeaturedBeat.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set beatsSlice filtered beats with mock action payload', () => {
  test('expect set correct fulfilled filtered beats', () => {
    const action = {
      type: getFilteredBeats.fulfilled.type,
      payload: [mockBeat],
    };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      beats: [mockBeat],
    });
  });

  test('expect set isFetching during filtered beats pending', () => {
    const action = { type: getFilteredBeats.pending.type };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get  filtered beats', () => {
    const action = { type: getFilteredBeats.rejected.type, payload: 'error' };
    const newState = beatsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct performance sync beatsSlice actions with mock action payload', () => {
  test('expect correct push beat comment', () => {
    const action = {
      type: getBeat.fulfilled.type,
      payload: mockBeat,
    };

    const stateWithBeat = beatsSlice.reducer(state, action);
    const newState = beatsSlice.reducer(
      stateWithBeat,
      pushNewBeatComment(mockComment),
    );
    expect(newState.beat?.comments).toContain(mockComment);
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

  test('expect resolved get preview beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchPreviewBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getPreviewBeats());

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchPreviewBeats).toBeCalled();
    });
  });

  test('expect resolved get filtered beats response', async () => {
    const mockData = {
      data: [mockBeat],
    };
    mockBeatsApi.fetchFilteredBeats.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getFilteredBeats({ query: '' }));

    await waitFor(() => {
      expect(beats.payload).toEqual([mockBeat]);
      expect(mockBeatsApi.fetchFilteredBeats).toBeCalledWith({ query: '' });
    });
  });

  test('expect resolved get beat response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.fetchBeat.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getBeat(1));

    await waitFor(() => {
      expect(beats.payload).toEqual(mockBeat);
      expect(mockBeatsApi.fetchBeat).toBeCalledWith(1);
    });
  });

  test('expect resolved get featured beat response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.fetchFeaturedBeat.mockResolvedValueOnce(mockData);
    const beats = await mockDispatch(getFeaturedBeat());

    await waitFor(() => {
      expect(beats.payload).toEqual(mockBeat);
      expect(mockBeatsApi.fetchFeaturedBeat).toBeCalledWith();
    });
  });

  test('expect resolved update beat response', async () => {
    const mockData = {
      data: mockBeat,
    };
    mockBeatsApi.putBeat.mockResolvedValueOnce(mockData);
    const beat = await mockDispatch(updateBeat());

    await waitFor(() => {
      expect(beat.payload).toEqual(mockBeat);
      expect(mockBeatsApi.putBeat).toBeCalled();
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

  test('expect rejected preview beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchPreviewBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getPreviewBeats());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected filtered beats response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchFilteredBeats.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getFilteredBeats({ query: '' }));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected beat response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchBeat.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getBeat(1));

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected featured beat response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.fetchFeaturedBeat.mockRejectedValue(mockData);
    const rejectedBeats = await mockDispatch(getFeaturedBeat());

    await waitFor(() => {
      expect(rejectedBeats.payload).toEqual(mockData);
    });
  });

  test('expect rejected update beat response', async () => {
    const mockData = {
      error: 'error',
    };
    mockBeatsApi.putBeat.mockRejectedValue(mockData);
    const rejectedBeat = await mockDispatch(updateBeat());

    await waitFor(() => {
      expect(rejectedBeat.payload).toEqual(mockData);
    });
  });
});

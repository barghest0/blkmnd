import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockSoundKit } from 'test-utils/mocks';
import * as soundKitsApi from 'shared/api/sound-kits';

import soundKitsSlice from './slice';
import { getAllSoundKits } from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';

const state = soundKitsSlice.getInitialState();

describe('soundKitsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(SOUND_KITS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(soundKitsSlice.name).toEqual(SOUND_KITS_SLICE_NAME);
  });
});

describe('correct set soundKitsSlice all sound kits with mock action payload', () => {
  test('expect set correct fulfilled sound kits', () => {
    const action = {
      type: getAllSoundKits.fulfilled.type,
      payload: [mockSoundKit],
    };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      soundKits: [mockSoundKit],
    });
  });

  test('expect set isFetching during sound kits pending', () => {
    const action = { type: getAllSoundKits.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get sound kits', () => {
    const action = {
      type: getAllSoundKits.rejected.type,
      payload: 'error',
    };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

jest.mock('shared/api/sound-kits');
const mockSoundKitsApi = soundKitsApi as jest.Mocked<typeof soundKitsApi>;

describe('resolved get sound kits with async thunk', () => {
  test('expect resolved get all sound kits response', async () => {
    const mockData = {
      data: [mockSoundKit],
    };
    mockSoundKitsApi.fetchAllSoundKits.mockResolvedValueOnce(mockData);
    const soundKits = await mockDispatch(getAllSoundKits());

    await waitFor(() => {
      expect(soundKits.payload).toEqual([mockSoundKit]);
      expect(mockSoundKitsApi.fetchAllSoundKits).toBeCalled();
    });
  });
});

describe('rejected get sound kits with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected get all sound kits response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.fetchAllSoundKits.mockRejectedValue(mockData);
    const rejectedSoundKits = await mockDispatch(getAllSoundKits());

    await waitFor(() => {
      expect(rejectedSoundKits.payload).toEqual(mockData);
    });
  });
});

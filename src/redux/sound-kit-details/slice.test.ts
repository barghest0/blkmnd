import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockComment, mockSoundKit } from 'test-utils/mocks';
import * as soundKitsApi from 'shared/api/sound-kits';

import slice from './slice';
import { getSoundKit, updateSoundKit } from './actions';
import {
  SOUND_KIT_DETAILS_INITIAL_STATE,
  SOUND_KIT_DETAILS_SLICE_NAME,
} from './constants';

const state = slice.getInitialState();

describe('sound kit details slice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(SOUND_KIT_DETAILS_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(slice.name).toEqual(SOUND_KIT_DETAILS_SLICE_NAME);
  });
});

describe('correct update sound kit with mock action payload', () => {
  test('expect correct update fulfilled sound kit', () => {
    const action = {
      type: updateSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      soundKit: mockSoundKit,
    });
  });

  test('expect set isFetching during sound kit update pending', () => {
    const action = { type: updateSoundKit.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected update sound kit', () => {
    const action = {
      type: updateSoundKit.rejected.type,
      payload: 'error',
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set sound kit with mock action payload', () => {
  test('expect set correct fulfilled sound kit', () => {
    const action = {
      type: getSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      soundKit: mockSoundKit,
    });
  });

  test('expect set isFetching during sound kit pending', () => {
    const action = { type: getSoundKit.pending.type };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get sound kit', () => {
    const action = {
      type: getSoundKit.rejected.type,
      payload: 'error',
    };
    const newState = slice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct performance sync slice actions with mock action payload', () => {
  test('expect correct push comment to sound kit', () => {
    const action = {
      type: getSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const stateWithSoundKit = slice.reducer(state, action);

    const newState = slice.reducer(
      stateWithSoundKit,
      slice.actions.pushNewSoundKitComment(mockComment),
    );
    expect(newState.soundKit?.comments).toContain(mockComment);
  });
});

jest.mock('shared/api/sound-kits');
const mockSoundKitsApi = soundKitsApi as jest.Mocked<typeof soundKitsApi>;

describe('resolved get sound kit details with async thunk', () => {
  test('expect resolved update sound kit details response', async () => {
    const mockData = {
      data: mockSoundKit,
    };
    mockSoundKitsApi.putSoundKit.mockResolvedValueOnce(mockData);
    const soundKit = await mockDispatch(updateSoundKit());

    await waitFor(() => {
      expect(soundKit.payload).toEqual(mockSoundKit);
      expect(mockSoundKitsApi.putSoundKit).toBeCalled();
    });
  });

  test('expect resolved get sound kit details response', async () => {
    const mockData = {
      data: mockSoundKit,
    };
    mockSoundKitsApi.fetchSoundKit.mockResolvedValueOnce(mockData);
    const soundKits = await mockDispatch(getSoundKit(1));

    await waitFor(() => {
      expect(soundKits.payload).toEqual(mockSoundKit);
      expect(mockSoundKitsApi.fetchSoundKit).toBeCalledWith(1);
    });
  });
});

describe('rejected get sound kit details with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected get sound kit response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.fetchSoundKit.mockRejectedValue(mockData);
    const rejectedSoundKit = await mockDispatch(getSoundKit(1));

    await waitFor(() => {
      expect(rejectedSoundKit.payload).toEqual(mockData);
    });
  });

  test('expect rejected update sound kit response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.putSoundKit.mockRejectedValue(mockData);
    const rejectedSoundKit = await mockDispatch(updateSoundKit());

    await waitFor(() => {
      expect(rejectedSoundKit.payload).toEqual(mockData);
    });
  });
});

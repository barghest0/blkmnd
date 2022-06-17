import { waitFor } from '@testing-library/react';

import { mockDispatch } from 'test-utils/utils';
import { mockComment, mockSoundKit } from 'test-utils/mocks';
import * as soundKitsApi from 'shared/api/soundKits';

import { getAllSoundKits, getPreviewSoundKits, getSoundKit } from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';
import soundKitsSlice from './soundKitsSlice';

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

describe('correct set soundKitsSlice preview sound kits with mock action payload', () => {
  test('expect set correct fulfilled preview sound kits', () => {
    const action = {
      type: getPreviewSoundKits.fulfilled.type,
      payload: [mockSoundKit],
    };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      soundKits: [mockSoundKit],
    });
  });

  test('expect set isFetching during preview sound kits pending', () => {
    const action = { type: getPreviewSoundKits.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get preview sound kits', () => {
    const action = {
      type: getPreviewSoundKits.rejected.type,
      payload: 'error',
    };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct set soundKitsSlice sound kits with mock action payload', () => {
  test('expect set correct fulfilled sound kit', () => {
    const action = {
      type: getSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      soundKit: mockSoundKit,
    });
  });

  test('expect set isFetching during sound kit pending', () => {
    const action = { type: getSoundKit.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
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
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});

describe('correct performance sync soundKitsSlice actions with mock action payload', () => {
  test('expect correct push comment to sound kit', () => {
    const action = {
      type: getSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const stateWithSoundKit = soundKitsSlice.reducer(state, action);

    const newState = soundKitsSlice.reducer(
      stateWithSoundKit,
      soundKitsSlice.actions.pushNewSoundKitComment(mockComment),
    );
    expect(newState.soundKit?.comments).toContain(mockComment);
  });
});

jest.mock('../../shared/api/soundKits');
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

  test('expect resolved get preview sound kits response', async () => {
    const mockData = {
      data: [mockSoundKit],
    };
    mockSoundKitsApi.fetchPreviewSoundKits.mockResolvedValueOnce(mockData);
    const soundKits = await mockDispatch(getPreviewSoundKits());

    await waitFor(() => {
      expect(soundKits.payload).toEqual([mockSoundKit]);
      expect(mockSoundKitsApi.fetchPreviewSoundKits).toBeCalled();
    });
  });

  test('expect resolved get sound kit response', async () => {
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

describe('rejected get sound kits with async thunk', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test('expect rejected all sound kits response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.fetchAllSoundKits.mockRejectedValue(mockData);
    const rejectedSoundKits = await mockDispatch(getAllSoundKits());

    await waitFor(() => {
      expect(rejectedSoundKits.payload).toEqual(mockData);
    });
  });

  test('expect rejected preview sound kits response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.fetchPreviewSoundKits.mockRejectedValue(mockData);
    const rejectedSoundKits = await mockDispatch(getPreviewSoundKits());

    await waitFor(() => {
      expect(rejectedSoundKits.payload).toEqual(mockData);
    });
  });

  test('expect rejected sound kit response', async () => {
    const mockData = {
      error: 'error',
    };
    mockSoundKitsApi.fetchSoundKit.mockRejectedValue(mockData);
    const rejectedSoundKit = await mockDispatch(getSoundKit(1));

    await waitFor(() => {
      expect(rejectedSoundKit.payload).toEqual(mockData);
    });
  });
});

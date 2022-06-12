import { mockSoundKit, mockUser } from 'test-utils/mocks';
import { getAllSoundKits, getPreviewSoundKits, getSoundKit } from './actions';
import { SOUND_KITS_INITIAL_STATE, SOUND_KITS_SLICE_NAME } from './constants';
import soundKitsSlice from './soundKitsSlice';

const state = soundKitsSlice.getInitialState();

describe('soundKitsSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(soundKitsSlice.getInitialState()).toEqual(SOUND_KITS_INITIAL_STATE);
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
      ...soundKitsSlice.getInitialState(),
      soundKits: [mockSoundKit],
    });
  });

  test('expect set isFetching during sound kits pending', () => {
    const action = { type: getAllSoundKits.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...soundKitsSlice.getInitialState(),
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
      ...soundKitsSlice.getInitialState(),
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
      ...soundKitsSlice.getInitialState(),
      soundKits: [mockSoundKit],
    });
  });

  test('expect set isFetching during preview sound kits pending', () => {
    const action = { type: getPreviewSoundKits.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...soundKitsSlice.getInitialState(),
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
      ...soundKitsSlice.getInitialState(),
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
      ...soundKitsSlice.getInitialState(),
      soundKit: mockSoundKit,
    });
  });

  test('expect set isFetching during sound kit pending', () => {
    const action = { type: getSoundKit.pending.type };
    const newState = soundKitsSlice.reducer(state, action);
    expect(newState).toEqual({
      ...soundKitsSlice.getInitialState(),
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
      ...soundKitsSlice.getInitialState(),
      errors: 'error',
    });
  });
});

describe('correct soundKitsSlice push comment', () => {
  test('expect correct push comment to sound kit', () => {
    const action = {
      type: getSoundKit.fulfilled.type,
      payload: mockSoundKit,
    };
    const stateWithSoundKit = soundKitsSlice.reducer(state, action);

    const comment = {
      user: mockUser,
      text: 'text',
      date: '20.10.1902',
    };
    const newState = soundKitsSlice.reducer(
      stateWithSoundKit,
      soundKitsSlice.actions.pushNewSoundKitComment(comment),
    );
    expect(newState.soundKit?.comments).toContain(comment);
  });
});

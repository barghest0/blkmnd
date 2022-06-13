import { mockBeat } from 'test-utils/mocks';
import { getQueueBeats } from './actions';
import { PLAYER_INITIAL_STATE, PLAYER_SLICE_NAME } from './constants';
import playerSlice from './playerSlice';

const state = playerSlice.getInitialState();
const {
  togglePlaying,
  openPlayer,
  setBeat,
  setDuration,
  setVolume,
  setCurrentTime,
  toggleIsLoop,
  toggleIsShuffle,
} = playerSlice.actions;

describe('playerSlice state tests', () => {
  test('expect set correct initial state', () => {
    expect(state).toEqual(PLAYER_INITIAL_STATE);
  });
  test('expect set correct slice name', () => {
    expect(playerSlice.name).toEqual(PLAYER_SLICE_NAME);
  });
});

describe('correct controls playerSlice with mock action payload', () => {
  test('expect set isPlaying truthy', () => {
    const newState = playerSlice.reducer(state, togglePlaying(mockBeat));
    expect(newState).toEqual({
      ...state,
      isPlaying: true,
    });
  });

  test('expect set isLoop truthy', () => {
    const newState = playerSlice.reducer(state, toggleIsLoop());
    expect(newState).toEqual({
      ...state,
      isLoop: true,
    });
  });

  test('expect set isShuffle truthy', () => {
    const newState = playerSlice.reducer(state, toggleIsShuffle());
    expect(newState).toEqual({
      ...state,
      isShuffle: true,
    });
  });

  test('expect set isOpen truthy', () => {
    const newState = playerSlice.reducer(state, openPlayer());
    expect(newState).toEqual({
      ...state,
      isOpen: true,
    });
  });

  test('expect set correct beats', () => {
    const queue = [mockBeat, mockBeat, mockBeat];
    const action = { type: getQueueBeats.fulfilled.type, payload: queue };
    const stateWithQueue = playerSlice.reducer(state, action);
    const newState = playerSlice.reducer(stateWithQueue, setBeat(mockBeat));
    expect(newState).toEqual({
      ...state,
      queue,
      beat: mockBeat,
      nextBeat: mockBeat,
      previousBeat: null,
    });
  });

  test('expect set correct duration', () => {
    const newState = playerSlice.reducer(state, setDuration(100));
    expect(newState).toEqual({
      ...state,
      duration: 100,
    });
  });

  test('expect set correct volume', () => {
    const newState = playerSlice.reducer(state, setVolume(100));
    expect(newState).toEqual({
      ...state,
      volume: 100,
    });
  });
  test('expect set correct current time', () => {
    const newState = playerSlice.reducer(state, setCurrentTime(100));
    expect(newState).toEqual({
      ...state,
      currentTime: 100,
    });
  });
});

describe('correct set playerSlice queue beats with mock action payload', () => {
  test('expect set correct fulfilled all beats', () => {
    const queue = [mockBeat, mockBeat, mockBeat];
    const action = { type: getQueueBeats.fulfilled.type, payload: queue };
    const newState = playerSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      queue,
    });
  });

  test('expect set isFetching during all beats pending', () => {
    const action = { type: getQueueBeats.pending.type };
    const newState = playerSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      isFetching: true,
    });
  });

  test('expect set errors after rejected get all beats', () => {
    const action = { type: getQueueBeats.rejected.type, payload: 'error' };
    const newState = playerSlice.reducer(state, action);
    expect(newState).toEqual({
      ...state,
      errors: 'error',
    });
  });
});
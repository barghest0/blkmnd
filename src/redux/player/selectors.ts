import { State } from '../types';

const state = (state: State) => ({
  isOpen: state.player.isOpen,
  isPlaying: state.player.isPlaying,
});

const controls = (state: State) => ({
  volume: state.player.volume,
  duration: state.player.duration,
  currentTime: state.player.currentTime,
  isLoop: state.player.isLoop,
  isShuffle: state.player.isShuffle,
});

const queue = (state: State) => state.player.queue;

const isFetching = (state: State) => state.player.isFetching;

const errors = (state: State) => state.player.errors;

const beats = (state: State) => ({
  current: state.player.beat,
  next: state.player.nextBeat,
  previous: state.player.previousBeat,
});

export { controls, queue, isFetching, errors, beats, state };

import { State } from 'reduxStore/types';

const fullState = (state: State) => state.player;

const state = (state: State) => ({
  isPlayerOpen: state.player.isOpen,
  isPlayerPlaying: state.player.isPlaying,
});

const controls = (state: State) => ({
  audioVolume: state.player.volume,
  audioDuration: state.player.duration,
  audioCurrentTime: state.player.currentTime,
  audioLoop: state.player.isLoop,
  audioShuffle: state.player.isShuffle,
});

const queue = (state: State) => state.player.queue;

const isFetching = (state: State) => state.player.isFetching;

const errors = (state: State) => state.player.errors;

const beats = (state: State) => ({
  currentPlayerBeat: state.player.beat,
  nextPlayerBeat: state.player.nextBeat,
  previousPlayerBeat: state.player.previousBeat,
});

export { fullState, controls, queue, isFetching, errors, beats, state };

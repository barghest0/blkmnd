import { State } from 'reduxStore/types';

const fullPlayerState = ({ player }: State) => player;

const playbackState = ({ player: { isOpen, isPlaying } }: State) => ({
  isPlayerOpen: isOpen,
  isPlayerPlaying: isPlaying,
});

const controls = ({
  player: { volume, duration, currentTime, isLoop, isShuffle },
}: State) => ({
  audioVolume: volume,
  audioDuration: duration,
  audioCurrentTime: currentTime,
  audioLoop: isLoop,
  audioShuffle: isShuffle,
});

const playerQueue = ({ player: { queue } }: State) => queue;

const isPlayerFetching = ({ player: { isFetching } }: State) => isFetching;

const playerErrors = ({ player: { errors } }: State) => errors;

const playerBeats = ({
  player: { currentBeat, nextBeat, previousBeat },
}: State) => ({
  currentPlayerBeat: currentBeat,
  nextPlayerBeat: nextBeat,
  previousPlayerBeat: previousBeat,
});

export {
  fullPlayerState,
  controls,
  playbackState,
  playerQueue,
  playerBeats,
  playerErrors,
  isPlayerFetching,
};

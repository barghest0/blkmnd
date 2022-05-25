import { Beat } from '../redux/beats/types';
import { PlayerState } from '../redux/player/types';
import store from '../redux/store';
import { Store } from '../redux/types';

class Player {
  public audio: HTMLAudioElement;
  public store: Store;
  public state: PlayerState;
  constructor() {
    this.audio = new Audio();
    this.audio.crossOrigin = 'anonymous';
    this.audio.volume = 0.1;
    // this.store = store();
    // this.state = this.store.getState().player;
  }

  setTrack(beat: Beat) {
    this.audio.src = beat.track;
    this.audio.play();
  }

  togglePlaying() {
    //   if (this.state.isPlaying) {
    //     this.audio.pause();
    //   } else {
    //     this.audio.play();
    //   }
  }
}

const player = new Player();

export default player;

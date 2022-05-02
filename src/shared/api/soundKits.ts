import { SoundKit } from '../../redux/soundKits/types';
import instance from './instanse';

const fetchPreviewSoundKits = () =>
  instance.get<SoundKit[]>('soundKits?_limit=4');

export { fetchPreviewSoundKits };

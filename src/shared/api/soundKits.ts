import { SoundKit } from '../../redux/soundKits/types';
import instance from './instanse';

const fetchPreviewSoundKits = () =>
  instance.get<SoundKit[]>('soundKits?_limit=4');

const fetchAllSoundKits = () => instance.get<SoundKit[]>('soundKits/');

const fetchSoundKit = (id: number) =>
  instance.get<SoundKit[]>(`soundKits/${id}`);

const putSoundKit = (soundKit: SoundKit) =>
  instance.put(`soundKits/${soundKit.id}`, soundKit);

export { fetchPreviewSoundKits, fetchAllSoundKits, fetchSoundKit, putSoundKit };

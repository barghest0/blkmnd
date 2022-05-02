import instance from './instanse';

import { Beat } from '../../redux/beat/types';

const fetchFeaturedBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

const fetchPreviewBeats = () => instance.get<Beat[]>('beats/');

const fetchBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

export { fetchFeaturedBeat, fetchPreviewBeats, fetchBeat };

import instance from './instanse';

import { Beat } from '../../redux/beat/types';

const fetchFeaturedBeat = () => instance.get<Beat[]>(`beats?featured=true`);

const fetchPreviewBeats = () => instance.get<Beat[]>('beats?_limit=10');

const fetchBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

const fetchAllBeats = () => instance.get<Beat[]>('beats/');

export { fetchFeaturedBeat, fetchPreviewBeats, fetchBeat, fetchAllBeats };

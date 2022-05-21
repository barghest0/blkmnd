import instance from './instanse';

import { Beat } from '../../redux/beats/types';
import { FiltersState } from '../../redux/beats/types';

const fetchFeaturedBeat = () => instance.get<Beat[]>(`beats?featured=true`);

const fetchPreviewBeats = () => instance.get<Beat[]>('beats?_limit=10');

const fetchDiscographyBeats = () => instance.get<Beat[]>('beats?_limit=3');

const fetchBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

const fetchAllBeats = () => instance.get<Beat[]>('beats/');

const fetchFilteredBeats = (filters: Partial<FiltersState>) => {
  const { query, bpm } = filters;
  const queryString = [];
  if (query) {
    queryString.push(`title_like=${query}`);
  }
  if (bpm) {
    queryString.push(`bpm=${bpm}`);
  }

  return instance.get<Beat[]>(`beats?${queryString.join('&')}`);
};

export {
  fetchFeaturedBeat,
  fetchPreviewBeats,
  fetchBeat,
  fetchAllBeats,
  fetchDiscographyBeats,
  fetchFilteredBeats,
};

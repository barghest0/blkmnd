import { Beat, FiltersState } from 'reduxStore/beats/types';

import { instance } from './instance';

const fetchFeaturedBeat = () => instance.get<Beat[]>('beats?featured=true');

const fetchPreviewBeats = () => instance.get<Beat[]>('beats?_limit=10');

const fetchDiscographyBeats = () => instance.get<Beat[]>('beats?_limit=3');

const fetchBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

const fetchAllBeats = () => instance.get<Beat[]>('beats/');

const fetchFilteredBeats = (filters: Partial<FiltersState>) => {
  const { query, bpm } = filters;
  const queryString = [];
  if (query !== '') {
    queryString.push(`title_like=${query}`);
  }
  if (bpm !== 'all') {
    queryString.push(`bpm=${bpm}`);
  }

  return instance.get<Beat[]>(`beats?${queryString.join('&')}`);
};

const putBeat = (beat: Beat) => instance.put<Beat>(`/beats/${beat.id}`, beat);

export {
  fetchFeaturedBeat,
  fetchPreviewBeats,
  fetchBeat,
  fetchAllBeats,
  putBeat,
  fetchDiscographyBeats,
  fetchFilteredBeats,
};

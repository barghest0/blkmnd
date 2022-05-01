import axios from 'axios';
import { Beat } from '../../redux/beats/types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

const fetchFeaturedBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

const fetchPreviewBeats = () => instance.get<Beat[]>('beats/');

export { fetchFeaturedBeat, fetchPreviewBeats };

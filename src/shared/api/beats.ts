import axios from 'axios';
import { Beat } from '../../redux/beats/types';

const instance = axios.create({
  baseURL: 'http://localhost:3000/',
});

const fetchPreviewBeat = (id: number) => instance.get<Beat>(`beats/${id}`);

export { fetchPreviewBeat };

import { Collab } from '../../redux/collabs/types';
import instance from './instanse';

const fetchPreviewCollabs = () => instance.get<Collab[]>('collabs?_limit=4');

const fetchAllCollabs = () => instance.get<Collab[]>('collabs/');

const fetchCollab = (id: number) => instance.get<Collab>(`collabs/${id}`);

export { fetchPreviewCollabs, fetchAllCollabs, fetchCollab };

import { Collab } from '../../redux/collabs/types';
import instance from './instanse';

const fetchPreviewCollabs = () => instance.get<Collab[]>('collabs?_limit=4');

export { fetchPreviewCollabs };

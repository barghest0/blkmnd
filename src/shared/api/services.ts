import { Service } from 'reduxStore/service-details/types';

import { instance } from './instance';

const fetchPreviewServices = () => instance.get<Service[]>('collabs?_limit=4');

const fetchAllServices = () => instance.get<Service[]>('collabs/');

const fetchService = (id: number) => instance.get<Service>(`collabs/${id}`);

export { fetchPreviewServices, fetchAllServices, fetchService };

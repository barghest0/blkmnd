import { Service } from 'redux/service-details/types';

type ServicesState = {
  services: Service[];
  isFetching: boolean;
  errors: any | null;
};

export { ServicesState };

import { State } from 'reduxStore/types';

const allServices = ({ services: { services } }: State) => services;

const isServicesFetching = ({ services: { isFetching } }: State) => isFetching;

const servicesErrors = ({ services: { errors } }: State) => errors;

export { allServices, isServicesFetching, servicesErrors };

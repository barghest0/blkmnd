import { State } from 'reduxStore/types';

const serviceDetails = ({ serviceDetails: { service } }: State) => service;

const isServiceDetailsFetching = ({ serviceDetails: { isFetching } }: State) =>
  isFetching;

const serviceDetailsErrors = ({ serviceDetails: { errors } }: State) => errors;

export { serviceDetails, isServiceDetailsFetching, serviceDetailsErrors };

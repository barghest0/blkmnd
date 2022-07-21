import { State } from 'reduxStore/types';

const soundKitDetails = ({ soundKitDetails: { soundKit } }: State) => soundKit;

const isSoundKitFetching = ({ soundKitDetails: { isFetching } }: State) =>
  isFetching;

const soundKitErrors = ({ soundKitDetails: { errors } }: State) => errors;

export { isSoundKitFetching, soundKitDetails, soundKitErrors };

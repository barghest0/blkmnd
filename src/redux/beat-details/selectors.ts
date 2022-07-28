import { State } from 'redux/types';

const beatFetching = ({ beatDetails: { isBeatFetching } }: State) =>
  isBeatFetching;

const beatDetails = ({ beatDetails: { beat } }: State) => beat;

const beatErrors = ({ beatDetails: { errors } }: State) => errors;

export { beatFetching, beatErrors, beatDetails };

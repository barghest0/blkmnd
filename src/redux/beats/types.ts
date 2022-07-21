import { Beat } from 'redux/beat-details/types';

type BeatsState = {
  beats: Beat[];
  isFetching: boolean;
  errors: null | any;
};

type FiltersState = {
  search: string;
  genre: string;
  type: string;
  bpm: string;
  mood: string;
  sort: string;
};

type ContractValues = {
  copies: number | string;
  radioStations: number | string;
  musicVideo: number | string;
  streams: number | string;
};

type FileType = {
  id: number;
  name: string;
};

type License = {
  id: number;
  name: string;
  price: number;
  fileTypes: FileType[];
  contractValues: ContractValues;
};

export { BeatsState, FiltersState, Beat, License };

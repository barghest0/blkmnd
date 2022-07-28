import { State } from 'reduxStore/types';

const profileDetails = ({ profile: { profileDetails } }: State) =>
  profileDetails;

const profileErrors = ({ profile: { errors } }: State) => errors;

export { profileDetails, profileErrors };

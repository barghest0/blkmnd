import { useDispatch } from 'react-redux';

import { Dispatch } from 'reduxStore/types';

const useTypedDispatch = () => useDispatch<Dispatch>();

export default useTypedDispatch;

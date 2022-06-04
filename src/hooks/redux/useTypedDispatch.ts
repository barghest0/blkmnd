import { TypedUseSelectorHook, useSelector } from 'react-redux';

import { State } from 'reduxStore/types';

const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export default useTypedSelector;

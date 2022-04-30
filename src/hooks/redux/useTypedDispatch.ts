import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { State } from '../../redux/types';

const useTypedSelector: TypedUseSelectorHook<State> = useSelector;

export default useTypedSelector;

import { useDispatch } from 'react-redux';
import { Dispatch } from '../../redux/types';

const useTypedDispatch = () => useDispatch<Dispatch>();

export default useTypedDispatch;

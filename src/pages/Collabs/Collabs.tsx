import { useEffect } from 'react';
import CollabsList from '../../components/CollabsList/CollabsList';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Collabs.style';

const Collabs = () => {
  const { getAllCollabs } = useActions();
  const { collabs } = useTypedSelector(state => state.collabs);

  useEffect(() => {
    getAllCollabs();
  }, []);

  return (
    <S.Collabs>
      <S.Container>
        <S.Title>Collabs</S.Title>
        <CollabsList collabs={collabs} />
      </S.Container>
    </S.Collabs>
  );
};

export default Collabs;

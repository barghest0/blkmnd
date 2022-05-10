import { useEffect } from 'react';
import CollabCard from '../../components/CollabCard/CollabCard';
import CollabsList from '../../components/CollabCard/CollabCard';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Collabs.style';

const Collabs = () => {
  const { getAllCollabs } = useActions();
  const { collabs, isFetching } = useTypedSelector(state => state.collabs);

  const collabsCards = collabs.map(collab => (
    <CollabCard collab={collab} key={collab.id} />
  ));

  useEffect(() => {
    getAllCollabs();
  }, []);

  return (
    <S.Collabs>
      <S.Container>
        <S.Title>Collabs</S.Title>
        <S.CollabsList></S.CollabsList>
        {isFetching ? <Preloader /> : collabsCards}
      </S.Container>
    </S.Collabs>
  );
};

export default Collabs;

import { useEffect } from 'react';

import CollabCard from 'components/CollabCard/CollabCard';
import Preloader from 'components/Preloader/Preloader';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import * as collabsSelectors from 'reduxStore/collabs/selectors';

import * as S from './Collabs.style';

const Collabs = () => {
  const { getAllCollabs } = useActions();
  const collabs = useTypedSelector(collabsSelectors.allCollabs);
  const isCollabsFetching = useTypedSelector(collabsSelectors.isFetching);

  const collabsCards = collabs.map((collab) => (
    <CollabCard collab={collab} key={collab.id} />
  ));

  useEffect(() => {
    getAllCollabs();
  }, []);

  return (
    <S.Collabs>
      <S.Container>
        <S.Title>Collabs</S.Title>
        <S.CollabsList>
          {isCollabsFetching ? <Preloader /> : collabsCards}
        </S.CollabsList>
      </S.Container>
    </S.Collabs>
  );
};

export default Collabs;

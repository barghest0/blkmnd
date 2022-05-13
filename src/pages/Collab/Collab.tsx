import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Collab.style';

const Collab = () => {
  const params = useParams();
  const { collab } = useTypedSelector(state => state.collabs);
  const { getCollab } = useActions();

  useEffect(() => {
    getCollab(Number(params.id));
  }, []);

  return (
    <S.Collab>
      <S.Container>
        {!collab ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={collab.image} />
            <S.Title>{collab.title}</S.Title>
            <S.Subtitle>Collaboration by someone</S.Subtitle>
          </S.Content>
        )}
      </S.Container>
    </S.Collab>
  );
};

export default Collab;

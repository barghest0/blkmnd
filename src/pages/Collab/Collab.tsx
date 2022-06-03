import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BuyButton from '../../components/BuyButton/BuyButton';
import Preloader from '../../components/Preloader/Preloader';
import ShareButton from '../../components/ShareButton/ShareButton';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Collab.style';
import * as collabsSelectors from '../../redux/collabs/selectors';

const Collab = () => {
  const params = useParams();
  const collab = useTypedSelector(collabsSelectors.collab);
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
            <S.CollabInfo>
              <S.TitleContainer>
                <S.Title>{collab.title}</S.Title>
                <S.Subtitle>Collaboration by someone</S.Subtitle>
              </S.TitleContainer>
              <S.Description>{collab.description}</S.Description>
              <S.Actions>
                <S.Action>
                  <BuyButton price={collab.price} details={collab} />
                </S.Action>
                <S.Action>
                  <ShareButton beatId={collab.id} />
                </S.Action>
              </S.Actions>
            </S.CollabInfo>
          </S.Content>
        )}
      </S.Container>
    </S.Collab>
  );
};

export default Collab;

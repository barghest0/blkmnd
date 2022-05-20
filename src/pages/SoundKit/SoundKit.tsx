import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BuyButton from '../../components/BuyButton/BuyButton';
import CommentField from '../../components/CommentField/CommentField';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import Preloader from '../../components/Preloader/Preloader';
import ShareButton from '../../components/ShareButton/ShareButton';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './SoundKit.style';

const SoundKit = () => {
  const params = useParams();
  const { soundKit } = useTypedSelector(state => state.soundKits);
  const { getSoundKit } = useActions();

  useEffect(() => {
    getSoundKit(Number(params.id));
  }, []);

  const isSoundKitFree = soundKit?.price === 0;

  return (
    <S.SoundKit>
      <S.Container>
        {!soundKit ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={soundKit.image} />
            <S.Title>{soundKit.title}</S.Title>
            <S.Subtitle>Sound kit by someone</S.Subtitle>
            <S.Description>{soundKit.description}</S.Description>
            <S.Actions>
              {!isSoundKitFree && <S.Player>player</S.Player>}
              <S.Action>
                {isSoundKitFree ? (
                  <DownloadButton beatId={soundKit.id} />
                ) : (
                  <BuyButton price={soundKit.price} product={soundKit} />
                )}
              </S.Action>
              <S.Action>
                <ShareButton beatId={soundKit.id} />
              </S.Action>
            </S.Actions>
          </S.Content>
        )}
        <S.Comment>
          <CommentField />
        </S.Comment>
        {!soundKit ? (
          <Preloader />
        ) : (
          <S.Reviews>
            <S.ReviewsTitle>Reviews</S.ReviewsTitle>
            <S.ReviewsComments></S.ReviewsComments>
          </S.Reviews>
        )}
      </S.Container>
    </S.SoundKit>
  );
};

export default SoundKit;

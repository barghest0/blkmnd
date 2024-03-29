import { format } from 'date-fns';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import BuyButton from 'components/BuyButton/BuyButton';
import Comment from 'components/Comment/Comment';
import CommentField, {
  CommentValues,
} from 'components/CommentField/CommentField';
import DownloadButton from 'components/DownloadButton/DownloadButton';
import Preloader from 'components/Preloader/Preloader';
import ShareButton from 'components/ShareButton/ShareButton';
import AuthContext from 'contexts/AuthContext';
import useActions from 'hooks/useActions';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import { createUserComment } from 'shared/helpers/userHelpers';
import * as soundKitDetailsSelectors from 'reduxStore/sound-kit-details/selectors';

import * as S from './SoundKit.style';

const SoundKit = () => {
  const params = useParams();
  const soundKit = useTypedSelector(soundKitDetailsSelectors.soundKitDetails);
  const { getSoundKit, pushNewSoundKitComment, updateSoundKit } = useActions();

  const { user } = useContext(AuthContext);

  useEffect(() => {
    getSoundKit(Number(params.id));
  }, []);

  const comments = soundKit?.comments.map((comment) => (
    <S.Comment key={comment.id}>
      <Comment comment={comment} />
    </S.Comment>
  ));

  const onCommentSubmit = ({ comment }: CommentValues) => {
    if (user) {
      const userComment = createUserComment(user, comment);
      pushNewSoundKitComment(userComment);
      updateSoundKit();
    }
  };

  const isSoundKitFree = soundKit?.price === 0;

  return (
    <S.SoundKit>
      <S.Container>
        {!soundKit ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={soundKit.image} />

            <S.SoundKitInfo>
              <S.TitleContainer>
                <S.Title>{soundKit.title}</S.Title>
                <S.Subtitle>Sound kit by someone</S.Subtitle>
              </S.TitleContainer>
              <S.Description>{soundKit.description}</S.Description>
              <S.Actions>
                {!isSoundKitFree && <S.Player>player</S.Player>}
                <S.Action>
                  {isSoundKitFree ? (
                    <DownloadButton beatId={soundKit.id} />
                  ) : (
                    <BuyButton price={soundKit.price} details={soundKit} />
                  )}
                </S.Action>
                <S.Action>
                  <ShareButton product={soundKit} />
                </S.Action>
              </S.Actions>
            </S.SoundKitInfo>
          </S.Content>
        )}
        <S.Comment>
          <CommentField onSubmit={onCommentSubmit} />
        </S.Comment>
        {!soundKit ? (
          <Preloader />
        ) : (
          <S.Reviews>
            <S.ReviewsTitle>Reviews</S.ReviewsTitle>
            <S.ReviewsComments>{comments}</S.ReviewsComments>
          </S.Reviews>
        )}
      </S.Container>
    </S.SoundKit>
  );
};

export default SoundKit;

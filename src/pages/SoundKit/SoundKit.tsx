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
import { User } from 'reduxStore/user/types';
import * as soundKitsSelectors from 'reduxStore/soundKits/selectors';

import * as S from './SoundKit.style';

function SoundKit() {
  const params = useParams();
  const soundKit = useTypedSelector(soundKitsSelectors.soundKit);
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

  const onCommentSubmit = (values: CommentValues) => {
    if (user) {
      const date = format(new Date(), 'MM.dd.yyyy');
      const commentUser: User = {
        id: user.id,
        username: user.username,
        password: user.password,
        role: 'user',
      };
      const comment = { user: commentUser, text: values.comment, date };
      pushNewSoundKitComment(comment);
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
                  <ShareButton beatId={soundKit.id} />
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
}

export default SoundKit;

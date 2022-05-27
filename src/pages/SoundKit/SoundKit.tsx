import { format } from 'date-fns';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import BuyButton from '../../components/BuyButton/BuyButton';
import Comment from '../../components/Comment/Comment';
import CommentField, {
  CommentValues,
} from '../../components/CommentField/CommentField';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import Preloader from '../../components/Preloader/Preloader';
import ShareButton from '../../components/ShareButton/ShareButton';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import { User } from '../../redux/user/types';
import * as S from './SoundKit.style';

const SoundKit = () => {
  const params = useParams();
  const { soundKit } = useTypedSelector(state => state.soundKits);
  const { getSoundKit, pushNewSoundKitComment, updateSoundKit } = useActions();

  useEffect(() => {
    getSoundKit(Number(params.id));
  }, []);

  const comments = soundKit?.comments.map(comment => (
    <S.Comment key={comment.id}>
      <Comment comment={comment} />
    </S.Comment>
  ));

  const onCommentSubmit = (values: CommentValues) => {
    const date = format(new Date(), 'MM.dd.yyyy');
    const user: User = {
      id: 1251,
      username: 'someone',
      password: 'asdgasdfjk3k4j23',
      role: 'user',
    };
    const comment = { user, text: values.comment, date };
    pushNewSoundKitComment(comment);
    updateSoundKit();
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
};

export default SoundKit;

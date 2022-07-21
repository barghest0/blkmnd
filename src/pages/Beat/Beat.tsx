import { SyntheticEvent, useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import PlayButton from 'components/PlayButton/PlayButton';
import Preloader from 'components/Preloader/Preloader';
import Visualizer from 'components/Visualizer/Visualizer';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import DownloadButton from 'components/DownloadButton/DownloadButton';
import ShareButton from 'components/ShareButton/ShareButton';
import TagLink from 'components/TagLink/TagLink';
import { Tab, Tabs } from '@mui/material';
import BeatsList from 'components/BeatsList/BeatsList';
import CommentField, {
  CommentValues,
} from 'components/CommentField/CommentField';
import ChooseLicenseButton from 'components/ChooseLicenseButton/ChooseLicenseButton';
import Comment from 'components/Comment/Comment';
import * as beatDetailsSelectors from 'reduxStore/beat-details/selectors';
import * as beatsSelectors from 'reduxStore/beats/selectors';
import { createUserComment } from 'shared/helpers/userHelpers';
import AuthContext from 'contexts/AuthContext';

import { COMMENTS_BEAT_TAB_STATE, RELATED_BEAT_TAB_STATE } from './constants';
import * as S from './Beat.style';

const Beat = () => {
  const params = useParams();

  const beats = useTypedSelector(beatsSelectors.allBeats);
  const beat = useTypedSelector(beatDetailsSelectors.beatDetails);

  const {
    getBeatDetails,
    setBeat,
    togglePlaying,
    getAllBeats,
    openPlayer,
    pushNewBeatComment,
    updateBeatDetails,
  } = useActions();

  const [tabState, setTabState] = useState(RELATED_BEAT_TAB_STATE);

  const handleTabChange = (_: SyntheticEvent, newState: string) => {
    setTabState(newState);
  };

  const { user } = useContext(AuthContext);

  const onPlayButtonClick = () => {
    if (beat) {
      openPlayer();
      togglePlaying(beat);
      setBeat(beat);
    }
  };

  const onCommentSubmit = ({ comment }: CommentValues) => {
    if (user) {
      const userComment = createUserComment(user, comment);
      pushNewBeatComment(userComment);
      updateBeatDetails();
    }
  };

  const comments = beat?.comments.map((comment) => (
    <S.Comment key={comment.id}>
      <Comment comment={comment} />
    </S.Comment>
  ));

  const tags = beat?.tags.map((tag) => (
    <S.Tag key={tag.id}>
      <TagLink tag={tag} />
    </S.Tag>
  ));

  useEffect(() => {
    getBeatDetails(Number(params.id));
    getAllBeats();
  }, []);

  return (
    <S.Beat>
      {!beat ? (
        <Preloader />
      ) : (
        <S.Content>
          <S.Container>
            <S.ContentInner>
              <S.Thumbnail src={beat.image} onClick={onPlayButtonClick} />
              <S.ContentInfo>
                <S.TitleContainer onClick={onPlayButtonClick}>
                  <S.PlayButton>
                    <PlayButton currentBeat={beat} />
                  </S.PlayButton>
                  <S.Title>{beat.title}</S.Title>
                </S.TitleContainer>
                <S.Musician>{beat.musician.name}</S.Musician>
                <S.BeatInfo>
                  <S.Info>
                    <SpeedIcon />
                    {beat.bpm}
                  </S.Info>
                  <S.Info>
                    <MusicNoteSharpIcon />
                    {beat.chord}
                  </S.Info>
                  <S.Info>
                    <AccessTimeFilledIcon fontSize="small" />
                    {beat.date}
                  </S.Info>
                </S.BeatInfo>
                <S.Actions>
                  <S.Buy>
                    <ChooseLicenseButton beat={beat} price={beat.price} />
                  </S.Buy>
                  <S.Download>
                    <DownloadButton beatId={beat.id}>Download</DownloadButton>
                  </S.Download>
                  <S.Share>
                    <ShareButton product={beat}>Share</ShareButton>
                  </S.Share>
                  <S.Tags>{tags}</S.Tags>
                </S.Actions>
              </S.ContentInfo>
              <S.Visualizer>
                <Visualizer />
              </S.Visualizer>
            </S.ContentInner>
          </S.Container>
          <S.Background src={beat.image} alt="background" />
          <S.BackgroundGradient />
        </S.Content>
      )}
      <S.Container>
        <S.CommentField>
          <CommentField onSubmit={onCommentSubmit} />
        </S.CommentField>
      </S.Container>

      <S.Tabs>
        <Tabs
          value={tabState}
          onChange={handleTabChange}
          indicatorColor="secondary"
        >
          <Tab value={RELATED_BEAT_TAB_STATE} label="RELATED TRACKS" />
          <Tab value={COMMENTS_BEAT_TAB_STATE} label="COMMENTS" />
        </Tabs>
      </S.Tabs>
      <S.Container>
        <S.TabPanel hidden={tabState !== RELATED_BEAT_TAB_STATE}>
          <BeatsList beats={beats} />
        </S.TabPanel>
        <S.TabPanel hidden={tabState !== COMMENTS_BEAT_TAB_STATE}>
          <S.Comments>{comments}</S.Comments>
        </S.TabPanel>
      </S.Container>
    </S.Beat>
  );
};

export default Beat;

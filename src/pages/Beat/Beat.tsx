import { SyntheticEvent, useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';

import MusicNoteSharpIcon from '@mui/icons-material/MusicNoteSharp';
import SpeedIcon from '@mui/icons-material/Speed';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

import PlayButton from '../../components/PlayButton/PlayButton';
import Preloader from '../../components/Preloader/Preloader';
import Visualizer from '../../components/Visualizer/Visualizer';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './Beat.style';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import ShareButton from '../../components/ShareButton/ShareButton';
import TagLink from '../../components/TagLink/TagLink';
import { Tab, Tabs } from '@mui/material';
import BeatsList from '../../components/BeatsList/BeatsList';
import CommentField, {
  CommentValues,
} from '../../components/CommentField/CommentField';
import ChooseLicenseButton from '../../components/ChooseLicenseButton/ChooseLicenseButton';
import Comment from '../../components/Comment/Comment';
import format from 'date-fns/format';
import { User } from '../../redux/user/types';

const Beat = () => {
  const params = useParams();

  const { beats, beat } = useTypedSelector(state => state.beats);

  const {
    getBeat,
    getAllBeats,
    setBeat,
    openPlayer,
    togglePlaying,
    pushNewBeatComment,
    updateBeat,
  } = useActions();

  const [value, setValue] = useState('related');

  const handleTabChange = (_: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const onPlayButtonClick = () => {
    if (beat) {
      openPlayer();
      togglePlaying(beat);
      setBeat(beat);
    }
  };

  const onCommentSubmit = (values: CommentValues) => {
    const date = format(new Date(), 'MM.dd.yyyy');
    const user: User = {
      id: 1251,
      username: 'someone',
      password: 'asdgasdfjk3k4j23',
      role: 'user',
    };
    const comment = { user, text: values.comment, date };
    pushNewBeatComment(comment);
    updateBeat();
  };

  const comments = beat?.comments.map(comment => (
    <S.Comment key={comment.id}>
      <Comment comment={comment} />
    </S.Comment>
  ));

  const tags = beat?.tags.map(tag => (
    <S.Tag key={tag.id}>
      <TagLink tag={tag} />
    </S.Tag>
  ));

  useEffect(() => {
    getBeat(Number(params.id));
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
                <S.Action>
                  <ChooseLicenseButton beat={beat} price={beat.price} />
                </S.Action>
                <S.Action>
                  <DownloadButton beatId={beat.id}>Download</DownloadButton>
                </S.Action>
                <S.Action>
                  <ShareButton beatId={beat.id}>Share</ShareButton>
                </S.Action>
                <S.Tags>{tags}</S.Tags>{' '}
              </S.Actions>
              <S.Visualizer>
                <Visualizer />
              </S.Visualizer>
            </S.ContentInner>
          </S.Container>
          <S.Background src={beat.image} alt="background" />
          <S.BackgroundGradient></S.BackgroundGradient>
        </S.Content>
      )}
      <S.Container>
        <S.CommentField>
          <CommentField onSubmit={onCommentSubmit} />
        </S.CommentField>
      </S.Container>

      <S.Tabs>
        <Tabs
          value={value}
          onChange={handleTabChange}
          indicatorColor="secondary"
        >
          <Tab value="related" label="RELATED TRACKS" />
          <Tab value="comments" label="COMMENTS" />
        </Tabs>
      </S.Tabs>
      <S.Container>
        <S.TabPanel hidden={value !== 'related'}>
          <BeatsList beats={beats} />
        </S.TabPanel>
        <S.TabPanel hidden={value !== 'comments'}>
          <S.Comments>{comments}</S.Comments>
        </S.TabPanel>
      </S.Container>
    </S.Beat>
  );
};

export default Beat;

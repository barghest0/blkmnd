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
import BuyButton from '../../components/BuyButton/BuyButton';
import DownloadButton from '../../components/DownloadButton/DownloadButton';
import ShareButton from '../../components/ShareButton/ShareButton';
import TagLink from '../../components/TagLink/TagLink';
import { Tab, Tabs } from '@mui/material';
import BeatsList from '../../components/BeatsList/BeatsList';
import CommentField from '../../components/CommentField/CommentField';

const Beat = () => {
  const params = useParams();

  const { beats, beat } = useTypedSelector(state => state.beats);

  const { getBeat, getAllBeats, setBeat, openPlayer, togglePlaying } =
    useActions();

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
      <S.Container>
        {!beat ? (
          <Preloader />
        ) : (
          <S.Content>
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
                <BuyButton beatId={beat.id} price={beat.price} />
              </S.Action>
              <S.Action>
                <DownloadButton beatId={beat.id} />
              </S.Action>
              <S.Action>
                <ShareButton beatId={beat.id} />
              </S.Action>
              <S.Tags>{tags}</S.Tags>
            </S.Actions>
          </S.Content>
        )}
        <S.Visualizer>
          <Visualizer />
        </S.Visualizer>
        <S.Comment>
          <CommentField />
        </S.Comment>
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
        <S.TabPanel hidden={value !== 'comments'}>comments</S.TabPanel>
      </S.Container>
    </S.Beat>
  );
};

export default Beat;

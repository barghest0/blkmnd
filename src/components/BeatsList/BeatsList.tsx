import { FC, SyntheticEvent } from 'react';

import * as S from './BeatsList.style';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import TagLink from '../TagLink/TagLink';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import { Beat } from '../../redux/beats/types';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Image from '../Image/Image';
import ChooseLicenseButton from '../ChooseLicenseButton/ChooseLicenseButton';
import useAudio from '../../hooks/useAudio';

type Props = {
  beats: Beat[];
};

type BeatColumnProps = {
  centered?: boolean;
};

type BeatRowProps = {
  isActive?: boolean;
};

const BeatsList: FC<Props> = ({ beats }) => {
  const { openPlayer } = useActions();
  const { beat: playerBeat } = useTypedSelector(state => state.player);

  const { setPlayerBeat, toggleAudioPlaying } = useAudio();

  const onBeatRowClick = (beat: Beat) => {
    openPlayer();
    setPlayerBeat(beat);
    toggleAudioPlaying(playerBeat);
  };

  const onActionButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const onLinkClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const beatsRows = beats.map(beat => {
    const { image, id, title, time, bpm, tags, price } = beat;

    const tagsLinks = tags.map(tag => (
      <S.Tag key={tag.id}>
        <TagLink tag={tag} />
      </S.Tag>
    ));
    const isBeatActive = beat.id === playerBeat?.id;

    return (
      <S.Row
        key={id}
        onClick={() => onBeatRowClick(beat)}
        isActive={isBeatActive}
      >
        <S.Column centered>
          <S.Thumbnail>
            <Image image={image} />
          </S.Thumbnail>
        </S.Column>
        <S.Column>
          <S.Title onClick={onLinkClick}>
            <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
          </S.Title>
        </S.Column>
        <S.Column>{time}</S.Column>
        <S.Column>{bpm}</S.Column>
        <S.Column>
          <S.Tags onClick={onLinkClick}>{tagsLinks}</S.Tags>
        </S.Column>
        <S.Column>
          <S.Actions>
            <S.Action onClick={onActionButtonClick}>
              <DownloadButton beatId={id} />
            </S.Action>
            <S.Action onClick={onActionButtonClick}>
              <ShareButton beatId={id} />
            </S.Action>
            <S.Action onClick={onActionButtonClick}>
              <ChooseLicenseButton price={price} beat={beat} />
            </S.Action>
          </S.Actions>
        </S.Column>
      </S.Row>
    );
  });

  return (
    <S.BeatsList>
      <S.ListHead>
        <S.HeadColumn></S.HeadColumn>
        <S.HeadColumn>Title</S.HeadColumn>
        <S.HeadColumn>Time</S.HeadColumn>
        <S.HeadColumn>Bpm</S.HeadColumn>
        <S.HeadColumn>Tags</S.HeadColumn>
      </S.ListHead>
      {beatsRows}
    </S.BeatsList>
  );
};

export { BeatRowProps, BeatColumnProps };
export default BeatsList;

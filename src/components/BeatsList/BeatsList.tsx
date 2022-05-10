import { FC } from 'react';

import * as S from './BeatsList.style';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import TagLink from '../TagLink/TagLink';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import BuyButton from '../BuyButton/BuyButton';
import { Beat } from '../../redux/beat/types';
import useActions from '../../hooks/useActions';

type Props = {
  beats: Beat[];
};

const BeatsList: FC<Props> = ({ beats }) => {
  const { setBeat, openPlayer, togglePlaying } = useActions();

  const onBeatRowClick = (beat: Beat) => {
    setBeat(beat);
    openPlayer();
    togglePlaying();
  };

  const beatsRows = beats.map(beat => {
    const { image, id, title, time, bpm, tags, price } = beat;

    const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

    return (
      <S.Row key={id} onClick={() => onBeatRowClick(beat)}>
        <S.Column>
          <S.Thumbnail src={image} width={50} height={50} />
        </S.Column>
        <S.Column>
          <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
        </S.Column>
        <S.Column>{time}</S.Column>
        <S.Column>{bpm}</S.Column>
        <S.Column>
          <S.Tags>{tagsLinks}</S.Tags>
        </S.Column>
        <S.Column>
          <S.Actions>
            <S.Action>
              <DownloadButton beatId={id} />
            </S.Action>
            <S.Action>
              <ShareButton beatId={id} />
            </S.Action>
            <S.Action>
              <BuyButton price={price} beatId={id} />
            </S.Action>
          </S.Actions>
        </S.Column>
      </S.Row>
    );
  });

  return (
    <S.BeatsList>
      <S.Row>
        <S.HeadColumn></S.HeadColumn>
        <S.HeadColumn>Title</S.HeadColumn>
        <S.HeadColumn>Time</S.HeadColumn>
        <S.HeadColumn>Bpm</S.HeadColumn>
        <S.HeadColumn>Tags</S.HeadColumn>
      </S.Row>
      {beatsRows}
    </S.BeatsList>
  );
};

export default BeatsList;

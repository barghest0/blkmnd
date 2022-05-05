import { FC, useEffect } from 'react';

import * as S from './FeaturedBeat.style';

import TagLink from '../TagLink/TagLink';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import AddToCardButton from '../AddToCardButton/AddToCardButton';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import { Beat } from '../../redux/beat/types';
import useActions from '../../hooks/useActions';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import PlayButton from '../PlayButton/PlayButton';

type Props = {
  beat: Beat;
  onDownloadClick: (id: number) => void;
  onShareClick: (id: number) => void;
  onBuyClick: (id: number) => void;
};

const FeaturedBeat: FC<Props> = ({
  beat,
  onDownloadClick,
  onShareClick,
  onBuyClick,
}) => {
  const { id, title, image, bpm, price, tags } = beat;
  const { isPlaying } = useTypedSelector(state => state.player);

  const { openPlayer, togglePlaying, setBeat } = useActions();

  const onThumbnailClick = () => {
    setBeat(require('./audio/test.mp3'));
    if (!isPlaying) {
      openPlayer();
    }
    togglePlaying();
  };

  const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

  return (
    <S.FeaturedBeat>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.Thumbnail src={image} width={130} height={130} />
        <S.PlayButton>
          <PlayButton />
        </S.PlayButton>
      </S.ThumbnailContainer>
      <S.Info>
        <S.Description>
          <S.Featured>Featured track</S.Featured>
          <S.Bpm> • {bpm}BPM</S.Bpm>
        </S.Description>
        <S.Title>
          <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
        </S.Title>
        <S.Actions>
          <S.Action onClick={() => onBuyClick(id)}>
            <AddToCardButton price={price} />
          </S.Action>
          <S.Action onClick={() => onDownloadClick(id)}>
            <DownloadButton />
          </S.Action>
          <S.Action onClick={() => onShareClick(id)}>
            <ShareButton />
          </S.Action>
          {tagsLinks}
        </S.Actions>
      </S.Info>
      <S.Visualizer>Visualizer</S.Visualizer>
    </S.FeaturedBeat>
  );
};

export default FeaturedBeat;

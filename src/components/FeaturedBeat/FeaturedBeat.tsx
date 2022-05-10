import { FC, memo } from 'react';

import * as S from './FeaturedBeat.style';

import TagLink from '../TagLink/TagLink';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import BuyButton from '../BuyButton/BuyButton';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import { Beat } from '../../redux/beat/types';
import useActions from '../../hooks/useActions';
import PlayButton from '../PlayButton/PlayButton';

type Props = {
  beat: Beat;
};

const FeaturedBeat: FC<Props> = memo(({ beat }) => {
  const { id, title, image, bpm, price, tags } = beat;

  const { openPlayer, togglePlaying, setBeat } = useActions();

  const onThumbnailClick = () => {
    setBeat(beat);
    openPlayer();
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
          <S.Action>
            <BuyButton price={price} beatId={id} />
          </S.Action>
          <S.Action>
            <DownloadButton beatId={id} />
          </S.Action>
          <S.Action>
            <ShareButton beatId={id} />
          </S.Action>
          {tagsLinks}
        </S.Actions>
      </S.Info>
    </S.FeaturedBeat>
  );
});

export default FeaturedBeat;

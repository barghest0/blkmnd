import { FC, memo } from 'react';

import * as S from './FeaturedBeat.style';

import TagLink from '../TagLink/TagLink';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import BuyButton from '../BuyButton/BuyButton';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import { Beat } from '../../redux/beats/types';
import useActions from '../../hooks/useActions';
import PlayButton from '../PlayButton/PlayButton';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';

type Props = {
  beat: Beat;
};

const FeaturedBeat: FC<Props> = memo(({ beat }) => {
  const { id, title, image, bpm, price, tags } = beat;

  const { openPlayer, togglePlaying, setBeat } = useActions();

  const {
    beat: playerBeat,
    isOpen,
    isPlaying,
  } = useTypedSelector(state => state.player);

  const onThumbnailClick = () => {
    setBeat(beat);
    setBeat(beat);
    if (!isOpen) {
      openPlayer();
    }
    if (playerBeat) {
      if (beat.id === playerBeat.id) {
        togglePlaying();
      }
      if (!isPlaying && beat.id !== playerBeat.id) {
        togglePlaying();
      }
    } else {
      togglePlaying();
    }
  };

  const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

  return (
    <S.FeaturedBeat>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.Thumbnail src={image} width={130} height={130} />
        <S.PlayButton>
          <PlayButton currentBeat={beat} />
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

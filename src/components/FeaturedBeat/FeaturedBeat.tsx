import { FC, memo } from 'react';

import TagLink from 'components/TagLink/TagLink';
import PlayButton from 'components/PlayButton/PlayButton';
import Image from 'components/Image/Image';
import ChooseLicenseButton from 'components/ChooseLicenseButton/ChooseLicenseButton';
import DownloadButton from 'components/DownloadButton/DownloadButton';
import ShareButton from 'components/ShareButton/ShareButton';
import { StyledLink } from 'shared/styles/links';
import { RouterPaths } from 'shared/router/types';
import useActions from 'hooks/useActions';
import { Beat } from 'reduxStore/beats/types';

import * as S from './FeaturedBeat.style';

type Props = {
  beat: Beat;
};

const FeaturedBeat: FC<Props> = memo(({ beat }) => {
  const {
    id, title, image, bpm, price, tags,
  } = beat;

  const { openPlayer, setBeat, togglePlaying } = useActions();

  const onThumbnailClick = () => {
    openPlayer();
    togglePlaying(beat);
    setBeat(beat);
  };

  const tagsLinks = tags.map((tag) => (
    <S.Tag key={tag.id}>
      <TagLink tag={tag} />
    </S.Tag>
  ));

  return (
    <S.FeaturedBeat>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.Thumbnail>
          <Image image={image} />
        </S.Thumbnail>
        <S.PlayButton>
          <PlayButton currentBeat={beat} />
        </S.PlayButton>
      </S.ThumbnailContainer>
      <S.Info>
        <S.Description>
          <S.Featured>Featured track</S.Featured>
          <S.Bpm>
            {' '}
            •
            {bpm}
            BPM
          </S.Bpm>
        </S.Description>
        <S.Title>
          <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
        </S.Title>
        <S.Actions>
          <S.Action>
            <ChooseLicenseButton price={price} beat={beat} />
          </S.Action>
          <S.Action>
            <DownloadButton beatId={id} />
          </S.Action>
          <S.Action>
            <ShareButton product={beat} />
          </S.Action>
          {tagsLinks}
        </S.Actions>
      </S.Info>
    </S.FeaturedBeat>
  );
});

export default FeaturedBeat;

import { FC, useState } from 'react';

import * as S from './FeaturedBeat.style';

import { Beat } from '../../redux/beats/types';
import TagLink from '../TagLink/TagLink';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import AddToCardButton from '../AddToCardButton/AddToCardButton';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';

type Props = {
  beat: Beat;
};

const FeaturedBeat: FC<Props> = ({ beat }) => {
  const { id, title, image, bpm, price, tags } = beat;
  const [played, setPlayed] = useState(false);

  const onThumbnailClick = () => {
    setPlayed(!played);
  };

  const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

  return (
    <S.FeaturedBeat>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.Thumbnail
          src={require(`./images/${image}`)}
          width={130}
          height={130}
        />
        <S.ActionCircle>
          {played ? (
            <S.PauseButton className={'override'} />
          ) : (
            <S.PlayButton className={'override'} />
          )}
        </S.ActionCircle>
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
          <AddToCardButton price={price} />
          <DownloadButton />
          <ShareButton />
          {tagsLinks}
        </S.Actions>
      </S.Info>
      <S.Visualizer>Visualizer</S.Visualizer>
    </S.FeaturedBeat>
  );
};

export default FeaturedBeat;

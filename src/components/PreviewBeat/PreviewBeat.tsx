import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import * as S from './PreviewBeat.style';

import Button from '../Button/Button';

import { Beat } from '../../redux/beats/types';
import { ButtonThemes } from '../Button/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';

type Props = {
  beat: Beat;
};

const PreviewBeat: FC<Props> = ({ beat }) => {
  const { title, image, bpm, price, tags } = beat;
  const [played, setPlayed] = useState(false);

  const onThumbnailClick = () => {
    setPlayed(!played);
  };

  const tagsButtons = tags.map(tag => (
    <Button rounded theme={ButtonThemes.dark}>
      <StyledLink to={`${RouterPaths.beats}?tag=${tag.name}`}>
        {tag.name}
      </StyledLink>
    </Button>
  ));

  return (
    <S.PreviewBeat>
      <S.ThumbnailContainer onClick={onThumbnailClick}>
        <S.Thumbnail
          src={require(`../../pages/Landing/images/${image}`)}
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
        <S.Title>{title}</S.Title>
        <S.Actions>
          <Button>
            <S.AddToCartIcon />${price}
          </Button>
          <Button theme={ButtonThemes.dark}>
            <S.DownloadIcon />
          </Button>
          <Button theme={ButtonThemes.dark}>
            <S.ShareIcon />
          </Button>
          {tagsButtons}
        </S.Actions>
      </S.Info>
    </S.PreviewBeat>
  );
};

export default PreviewBeat;

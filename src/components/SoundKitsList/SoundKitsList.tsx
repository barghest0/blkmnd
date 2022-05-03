import { FC } from 'react';
import { SoundKit } from '../../redux/soundKits/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import * as S from './SoundKitsList.style';

type Props = {
  kits: SoundKit[];
};

const SoundKitsList: FC<Props> = ({ kits }) => {
  const soundKitsItems = kits.map(({ id, image, price, title }) => (
    <S.SoundKit key={id}>
      <StyledLink to={`${RouterPaths.soundKits}/${id}`}>
        {image ? <S.Thumbnail src={image} /> : 123}
        <S.Title>{title}</S.Title>
        <S.Price>{price > 0 ? `$${price.toFixed(2)}` : 'FREE'}</S.Price>
      </StyledLink>
    </S.SoundKit>
  ));

  return <S.SoundKitsList>{soundKitsItems}</S.SoundKitsList>;
};

export default SoundKitsList;

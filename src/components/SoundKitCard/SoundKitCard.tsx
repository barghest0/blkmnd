import { FC } from 'react';

import Image from 'components/Image/Image';
import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';
import { SoundKit } from 'reduxStore/soundKits/types';

import * as S from './SoundKitCard.style';

type Props = {
  soundKit: SoundKit;
};

const SoundKitsList: FC<Props> = ({ soundKit }) => {
  const { id, image, title, price } = soundKit;

  return (
    <S.SoundKitCard>
      <StyledLink to={`${RouterPaths.soundKits}/${id}`}>
        <S.Thumbnail>
          <Image image={image} />
        </S.Thumbnail>
        <S.Title>{title}</S.Title>
        <S.Price>{price > 0 ? `$${price.toFixed(2)}` : 'FREE'}</S.Price>
      </StyledLink>
    </S.SoundKitCard>
  );
};

export default SoundKitsList;

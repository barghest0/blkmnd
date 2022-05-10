import { FC } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
import { SoundKit } from '../../redux/soundKits/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import Preloader from '../Preloader/Preloader';
import * as S from './SoundKitCard.style';

type Props = {
  soundKit: SoundKit;
};

const SoundKitsList: FC<Props> = ({ soundKit }) => {
  const { id, image, title, price } = soundKit;
  const { imagesPreloaded } = useImagePreloader([image]);

  return (
    <S.SoundKitCard>
      <StyledLink to={`${RouterPaths.soundKits}/${id}`}>
        {!imagesPreloaded ? (
          <Preloader />
        ) : (
          <S.Thumbnail src={image} width={175} height={175} />
        )}
        <S.Title>{title}</S.Title>
        <S.Price>{price > 0 ? `$${price.toFixed(2)}` : 'FREE'}</S.Price>
      </StyledLink>
    </S.SoundKitCard>
  );
};

export default SoundKitsList;

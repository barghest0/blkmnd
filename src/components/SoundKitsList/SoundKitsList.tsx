import { FC } from 'react';
import useImagePreloader from '../../hooks/useImagePreloader';
import { SoundKit } from '../../redux/soundKits/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import Preloader from '../Preloader/Preloader';
import * as S from './SoundKitsList.style';

type Props = {
  kits: SoundKit[];
};

const SoundKitsList: FC<Props> = ({ kits }) => {
  const soundKitsItems = kits.map(({ id, image, price, title }) => {
    const { imagesPreloaded } = useImagePreloader([image]);

    return (
      <StyledLink to={`${RouterPaths.soundKits}/${id}`}>
        <S.SoundKit key={id}>
          {!imagesPreloaded ? (
            <Preloader />
          ) : (
            <S.Thumbnail src={image} width={175} height={175} />
          )}
          <S.Title>{title}</S.Title>
          <S.Price>{price > 0 ? `$${price.toFixed(2)}` : 'FREE'}</S.Price>
        </S.SoundKit>
      </StyledLink>
    );
  });

  return <S.SoundKitsList>{soundKitsItems}</S.SoundKitsList>;
};

export default SoundKitsList;

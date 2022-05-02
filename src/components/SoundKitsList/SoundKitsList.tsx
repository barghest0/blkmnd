import { FC } from 'react';
import { SoundKit } from '../../redux/soundKits/types';
import * as S from './SoundKitsList.style';

type Props = {
  kits: SoundKit[];
};

const SoundKitsList: FC<Props> = ({ kits }) => {
  const soundKitsItems = kits.map(kit => (
    <S.SoundKit key={kit.id}>
      <S.Thumbnail src={kit.image} />
    </S.SoundKit>
  ));

  return <S.SoundKitsList>{soundKitsItems}</S.SoundKitsList>;
};

export default SoundKitsList;

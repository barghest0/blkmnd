import { FC, useEffect } from 'react';
import SoundKitsList from '../../components/SoundKitsList/SoundKitsList';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';

import * as S from './SoundKits.style';

const SoundKits: FC = () => {
  const { getAllSoundKits } = useActions();

  const { soundKits } = useTypedSelector(state => state.soundKits);

  useEffect(() => {
    getAllSoundKits();
  });

  return (
    <S.SoundKits>
      <S.Container>
        <S.Title>Sound Kits</S.Title>
        <SoundKitsList kits={soundKits} />
      </S.Container>
    </S.SoundKits>
  );
};

export default SoundKits;

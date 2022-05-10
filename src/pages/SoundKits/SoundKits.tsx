import { FC, useEffect } from 'react';

import Preloader from '../../components/Preloader/Preloader';
import SoundKitCard from '../../components/SoundKitCard/SoundKitCard';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';

import * as S from './SoundKits.style';

const SoundKits: FC = () => {
  const { getAllSoundKits } = useActions();

  const { soundKits, isFetching } = useTypedSelector(state => state.soundKits);

  const soundKitsCards = soundKits.map(soundKit => (
    <SoundKitCard soundKit={soundKit} key={soundKit.id} />
  ));

  useEffect(() => {
    getAllSoundKits();
  }, []);

  return (
    <S.SoundKits>
      <S.Container>
        <S.Title>Sound Kits</S.Title>
        <S.SoundKitsList>
          {isFetching ? <Preloader /> : soundKitsCards}
        </S.SoundKitsList>
      </S.Container>
    </S.SoundKits>
  );
};

export default SoundKits;

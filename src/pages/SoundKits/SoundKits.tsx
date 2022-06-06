import { FC, useEffect } from 'react';

import Preloader from 'components/Preloader/Preloader';
import SoundKitCard from 'components/SoundKitCard/SoundKitCard';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';
import * as soundKitsSelectors from 'reduxStore/soundKits/selectors';

import * as S from './SoundKits.style';

const SoundKits: FC = () => {
  const { getAllSoundKits } = useActions();

  const soundKits = useTypedSelector(soundKitsSelectors.allSoundKits);
  const isSoundKitsFetching = useTypedSelector(soundKitsSelectors.isFetching);

  const soundKitsCards = soundKits.map((soundKit) => (
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
          {isSoundKitsFetching ? <Preloader /> : soundKitsCards}
        </S.SoundKitsList>
      </S.Container>
    </S.SoundKits>
  );
};

export default SoundKits;

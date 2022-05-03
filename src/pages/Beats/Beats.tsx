import { useEffect } from 'react';
import * as S from './Beats.style';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import BeatsList from '../../components/BeatsList/BeatsList';

const Beats = () => {
  const { getAllBeats } = useActions();
  const { beats } = useTypedSelector(state => state.beats);
  useEffect(() => {
    getAllBeats();
  }, []);
  return (
    <S.Beats>
      <S.Container>
        <S.Title>Beats</S.Title>
        <BeatsList
          beats={beats}
          onDownloadClick={() => {}}
          onBuyClick={() => {}}
          onShareClick={() => {}}
        />
      </S.Container>
    </S.Beats>
  );
};

export default Beats;

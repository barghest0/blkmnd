import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Preloader from '../../components/Preloader/Preloader';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import * as S from './SoundKit.style';

const SoundKit = () => {
  const params = useParams();
  const { soundKit } = useTypedSelector(state => state.soundKits);
  const { getSoundKit } = useActions();

  useEffect(() => {
    getSoundKit(Number(params.id));
  }, []);

  return (
    <S.SoundKit>
      <S.Container>
        {!soundKit ? (
          <Preloader />
        ) : (
          <S.Content>
            <S.Thumbnail src={soundKit.image} />
            <S.Title>{soundKit.title}</S.Title>
            <S.Subtitle>Sound kit by someone</S.Subtitle>
          </S.Content>
        )}
      </S.Container>
    </S.SoundKit>
  );
};

export default SoundKit;

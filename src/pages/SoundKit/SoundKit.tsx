import { useParams } from 'react-router-dom';
import * as S from './SoundKit.style';

const SoundKit = () => {
  const params = useParams();

  return (
    <S.SoundKit>
      <S.Container>SoundKit{params.id}</S.Container>
    </S.SoundKit>
  );
};

export default SoundKit;

import { useParams } from 'react-router-dom';
import * as S from './Beat.style';

const Beat = () => {
  const params = useParams();

  return (
    <S.Beat>
      <S.Container>beat{params.id}</S.Container>
    </S.Beat>
  );
};

export default Beat;

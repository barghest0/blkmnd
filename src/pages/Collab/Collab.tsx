import { useParams } from 'react-router-dom';
import * as S from './Collab.style';

const Collab = () => {
  const params = useParams();
  return (
    <S.Collab>
      <S.Container>{params.id}</S.Container>
    </S.Collab>
  );
};

export default Collab;

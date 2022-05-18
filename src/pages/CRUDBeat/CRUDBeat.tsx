import { Outlet, useParams } from 'react-router-dom';

import * as S from './CRUDBeat.style';

const CRUDBeat = () => {
  const params = useParams();
  console.log(params);

  return (
    <S.CRUDBeat>
      <S.Container>
        <S.Title>Crud beat</S.Title>
        <Outlet />
      </S.Container>
    </S.CRUDBeat>
  );
};

export default CRUDBeat;

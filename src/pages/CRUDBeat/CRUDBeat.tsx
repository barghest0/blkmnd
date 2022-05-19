import { Outlet } from 'react-router-dom';

import * as S from './CRUDBeat.style';

const CRUDBeat = () => {
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

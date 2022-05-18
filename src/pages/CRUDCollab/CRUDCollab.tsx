import {Outlet} from 'react-router-dom';

import * as S from './CRUDCollab.style';

const CRUDCollab = () => {
  return (
    <S.CRUDCollab>
      <S.Container>
        <S.Title>Crud collab</S.Title>
        <Outlet/>
      </S.Container>
    </S.CRUDCollab>
  );
};

export default CRUDCollab;

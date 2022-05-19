import { Outlet } from 'react-router-dom';

import * as S from './CRUD.style';

const CRUD = () => {
  return (
    <S.CRUD>
      <S.Container>
        <S.Title>Crud</S.Title>
        <Outlet />
      </S.Container>
    </S.CRUD>
  );
};

export default CRUD;

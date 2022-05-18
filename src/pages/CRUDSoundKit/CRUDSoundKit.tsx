import {Outlet} from 'react-router-dom';

import * as S from './CRUDSoundKit.style';

const CRUDSoundKit = () => {
  return (
    <S.CRUDSoundKit>
      <S.Container>
        <S.Title>Crud sound kit</S.Title>
        <Outlet/>
      </S.Container>
    </S.CRUDSoundKit>
  );
};

export default CRUDSoundKit;

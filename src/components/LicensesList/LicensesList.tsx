import { FC } from 'react';

import * as S from './LicensesList.style';

import { License } from '../../redux/beat/types';
import Button from '../Button/Button';

type Props = {
  licenses: License[];
};
const LicensesList: FC<Props> = ({ licenses }) => {
  const licensesItems = licenses.map(license => (
    <S.Column>
      <S.Title>{license.name} License</S.Title>
      <S.Price>${license.price.toFixed(2)}</S.Price>
      <S.Details>
        <Button>Read license</Button>
      </S.Details>
    </S.Column>
  ));
  return <S.LicensesList>{licensesItems}</S.LicensesList>;
};

export default LicensesList;

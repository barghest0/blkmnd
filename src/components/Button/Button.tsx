import { FC } from 'react';

import * as S from './Button.style';

type Props = {
  children: string;
};

const Button: FC<Props> = ({ children }) => {
  return <S.Button>{children}</S.Button>;
};

export default Button;

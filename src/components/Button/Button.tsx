import { FC } from 'react';

import * as S from './Button.style';
import { ButtonThemes } from './types';

type Props = {
  children: React.ReactNode;
  theme?: ButtonThemes;
};

const Button: FC<Props> = ({ children, rounded = false, theme = 'light' }) => {
  return <S.Button theme={theme}>{children}</S.Button>;
};

export default Button;
export { Props };

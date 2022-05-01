import { FC } from 'react';

import * as S from './Button.style';
import { ButtonThemes } from './types';

type Props = {
  children: React.ReactNode;
  theme?: ButtonThemes;
  rounded?: boolean;
};

const Button: FC<Props> = ({ children, rounded = false, theme = 'light' }) => {
  return (
    <S.Button rounded={rounded} theme={theme}>
      {children}
    </S.Button>
  );
};

export default Button;
export { Props };

import { FC } from 'react';

import * as S from './Button.style';
import { ButtonThemes } from './types';

type Props = {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  theme?: ButtonThemes;
  hasBackground?: boolean;
};

const Button: FC<Props> = ({ children, type, hasBackground, theme }) => (
  <S.Button type={type} theme={theme} hasBackground={hasBackground}>
    {children}
  </S.Button>
);

Button.defaultProps = {
  type: 'button',
  theme: ButtonThemes.light,
  hasBackground: true,
};

export default Button;

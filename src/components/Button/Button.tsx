import { FC } from 'react';

import * as S from './Button.style';
import { ButtonThemes } from './types';

type Props = {
  children: React.ReactNode;
  theme?: ButtonThemes;
  hasBackground?: boolean;
};

const Button: FC<Props> = ({
  children,
  hasBackground = true,
  theme = 'light',
}) => {
  return (
    <S.Button theme={theme} hasBackground={hasBackground}>
      {children}
    </S.Button>
  );
};

export default Button;
export { Props };

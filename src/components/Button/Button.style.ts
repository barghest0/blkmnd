import styled, { css } from 'styled-components';

import ThemeColors from 'shared/styles/theme';
import { button } from 'shared/styles/mixins';

import { ButtonThemes } from './types';

type ButtonProps = {
  theme?: ButtonThemes;
  hasBackground?: boolean;
};

const Button = styled.button<ButtonProps>`
  ${({ theme, hasBackground }) => {
    const color =
      theme === ButtonThemes.dark ? ThemeColors.actionColor : ThemeColors.black;
    const backgroundColor =
      theme === ButtonThemes.dark ? ThemeColors.black : ThemeColors.secondColor;

    return css`
      ${button}
      color: ${color};
      background-color: ${hasBackground ? backgroundColor : 'transparent'};
    `;
  }}
`;

export { Button };

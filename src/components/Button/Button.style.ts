import styled, { css } from 'styled-components';

import ThemeColors from 'shared/styles/theme';
import { button } from 'shared/styles/mixins';

import { Props } from './Button';
import { ButtonThemes } from './types';

const Button = styled.button<Props>`
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

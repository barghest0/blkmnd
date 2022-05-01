import styled, { css } from 'styled-components';

import { Props } from './Button';
import { ButtonThemes } from './types';

import ThemeColors from '../../shared/styles/theme';
import { button } from '../../shared/styles/mixins';

const Button = styled.button<Props>`
  ${({ theme }) => {
    const color =
      theme === ButtonThemes.dark ? ThemeColors.actionColor : ThemeColors.black;
    const background =
      theme === ButtonThemes.dark ? ThemeColors.black : ThemeColors.secondColor;

    return css`
      ${button}
      color: ${color};
      background-color: ${background};
    `;
  }}
`;

export { Button };

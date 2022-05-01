import styled, { css } from 'styled-components';

import { Props } from './Button';
import { ButtonThemes } from './types';

import ThemeColors from '../../shared/styles/theme';

const Button = styled.button<Props>`
  ${({ rounded, theme }) => {
    const color = theme === ButtonThemes.dark ? '#757575' : ThemeColors.black;
    const borderRadius = rounded ? '20px' : '4px';
    const background =
      theme === ButtonThemes.dark ? ThemeColors.black : ThemeColors.secondColor;

    return css`
      width: 100%;
      height: 100%;
      color: ${color};
      background-color: ${background};
      border-radius: ${borderRadius};
      border: none;
      outline: none;
      text-transform: uppercase;
      font-size: 16px;
      font-weight: 600;
      cursor: pointer;
      text-description: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
    `;
  }}
`;

export { Button };

import styled, { css } from 'styled-components';

import { Props } from './Button';
import { ButtonThemes } from './types';

import ThemeColors from '../../shared/styles/theme';

const Button = styled.button<Props>`
  ${({ theme }) => {
    const color =
      theme === ButtonThemes.dark ? ThemeColors.actionColor : ThemeColors.black;
    const background =
      theme === ButtonThemes.dark ? ThemeColors.black : ThemeColors.secondColor;

    return css`
      width: 100%;
      height: 100%;
      color: ${color};
      background-color: ${background};
      border-radius: 4px;
      border: none;
      outline: none;
      text-transform: uppercase;
      font-size: inherit;
      font-weight: 600;
      cursor: pointer;
      text-description: none;
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 1rem;
      transition: all 0.2s linear;

      &:hover {
        filter: brightness(0.8);
      }
    `;
  }}
`;

export { Button };

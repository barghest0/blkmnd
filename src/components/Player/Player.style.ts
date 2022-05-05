import styled, { css } from 'styled-components';
import ThemeColors from '../../shared/styles/theme';
import { PlayerProps } from './Player';

const Player = styled.div<PlayerProps>`
  ${({ isOpen }) => {
    const display = isOpen ? 'block' : 'none';
    return css`
      height: 70px;
      width: 100%;
      background-color: ${ThemeColors.headerColor};
      display: ${display};
      position: fixed;
      bottom: 0;
    `;
  }}
`;

const PlayButton = styled.div``;

export { Player, PlayButton };

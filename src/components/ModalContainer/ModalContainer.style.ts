import styled, { css } from 'styled-components';

import ThemeColors from 'shared/styles/theme';

import { ModalContainerProps } from './ModalContainer';

const ModalContainer = styled.div<ModalContainerProps>`
  ${({ isOpen }) => {
    const visability = isOpen ? '1' : '0';
    const pointerEvents = isOpen ? 'all' : 'none';

    return css`
      position: fixed;
      top: 0;
      z-index: 110;
      width: 100%;
      height: 100%;
      overflow: hidden;
      pointer-events: ${pointerEvents};
      background: ${ThemeColors.black}0008d;
      opacity: ${visability};
      display: flex;
      justify-content: center;
      align-items: center;
      transition: all 0.2s linear;
    `;
  }}
`;

export { ModalContainer };

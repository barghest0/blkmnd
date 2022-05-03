import styled, { css } from 'styled-components';
import { Props } from './Nav';
import ThemeColors from '../../shared/styles/theme';

const Nav = styled.nav<Props>`
  ${({ isSearchOpen }) => {
    const opacity = isSearchOpen ? 0 : 1;
    const pointerEvents = isSearchOpen ? 'none' : 'all';
    return css`
      opacity: ${opacity};
      pointer-events: ${pointerEvents};
      display: flex;
      align-items: center;
      column-gap: 20px;
      transition: all 0.2s linear;
    `;
  }}
`;

const NavItem = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ::after {
    content: '';
    background-color: ${ThemeColors.white};
    position: absolute;
    height: 2px;
    width: 100%;
    opacity: 0;
    bottom: 0;
    left: 0;
    transition: all 0.2s linear;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
`;

export { Nav, NavItem };

import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const Nav = styled.nav`
  display: flex;
  align-items: center;
  column-gap: 20px;
`;

const NavItem = styled.div`
  position: relative;
  ::after {
    content: '';
    background-color: ${ThemeColors.white};
    position: absolute;
    height: 2px;
    width: 100%;
    opacity: 0;
    bottom: -20px;
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

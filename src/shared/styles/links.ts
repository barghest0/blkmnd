import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { button } from './mixins';
import ThemeColors from './theme';

const StyledNavLink = styled(NavLink)`
  color: ${ThemeColors.white};
  text-decoration: none;
  position: relative;

  &.active {
    ::after {
      content: '';
      background-color: ${ThemeColors.white};
      position: absolute;
      height: 2px;
      width: 100%;
      opacity: 1;
      bottom: -20px;
      left: 0;
      transition: all 0.2s linear;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ButtonLink = styled(Link)`
  ${button};
  color: ${ThemeColors.black};
  background-color: ${ThemeColors.secondColor};
  text-decoration: none;
  font-size: 14px;
`;

export { StyledNavLink, StyledLink, ButtonLink };

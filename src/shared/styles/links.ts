import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThemeColors from './theme';

const StyledNavLink = styled(NavLink)`
  color: ${ThemeColors.white};
  text-decoration: none;

  &.active {
    color: ${ThemeColors.secondColor};
  }
`;

const StyledLink = styled(NavLink)`
  color: ${ThemeColors.white};
  text-decoration: none;
`;

export { StyledNavLink, StyledLink };
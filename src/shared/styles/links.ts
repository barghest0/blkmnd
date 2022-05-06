import { NavLink, Link } from 'react-router-dom';
import styled from 'styled-components';
import { button } from './mixins';
import ThemeColors from './theme';

const StyledNavLink = styled(NavLink)`
  color: ${ThemeColors.white};
  text-decoration: none;
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
    bottom: 0px;
    left: 0;
    transition: all 0.2s linear;
  }
  :hover {
    ::after {
      opacity: 1;
    }
  }
  &.active {
    ::after {
      opacity: 1;
    }
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-overflow:inherit;

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

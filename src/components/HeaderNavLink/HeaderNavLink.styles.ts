import styled from 'styled-components';

import { StyledNavLink } from 'shared/styles/links';
import ThemeColors from 'shared/styles/theme';

const HeaderNavLink = styled(StyledNavLink)`
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

export { HeaderNavLink };

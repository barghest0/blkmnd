import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const Header = styled.header`
  background-color: ${ThemeColors.headerColor};
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  position: fixed;
  width: 100%;
`;

const HeaderLogo = styled.div``;

const HeaderNav = styled.div``;

export { Header, HeaderLogo, HeaderNav };

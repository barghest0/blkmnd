import styled from 'styled-components';
import { container } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const Footer = styled.footer`
  background-color: ${ThemeColors.layoutColor};
  padding: 80px 0;
`;

const Container = styled.div`
  ${container}
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 3fr repeat(3, 2fr) 2fr;
  column-gap: 10px;
  font-size: 14px;
  font-weight: 500;
`;

const Logo = styled.img``;

const Description = styled.div`
  width: 90%;
`;

const Nav = styled.nav``;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Socials = styled.div`
  display: flex;
  column-gap: 20px;
  height: 30px;
`;

const Social = styled.a`
  border: 1px solid ${ThemeColors.white};
  border-radius: 50%;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  width: 30px;
`;

export {
  Footer,
  FooterInner,
  Container,
  Logo,
  Description,
  Nav,
  Column,
  Social,
  Socials,
};

import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import { container } from 'shared/styles/mixins';
import ThemeColors from 'shared/styles/theme';

const Footer = styled.footer`
  background-color: ${ThemeColors.layoutColor};
  padding: 80px 0;

  @media ${breakpoint('md')} {
    padding: 30px 0;
  }
`;

const Container = styled.div`
  ${container}
`;

const FooterInner = styled.div`
  display: grid;
  grid-template-columns: 1.5fr 3fr 1fr;
  column-gap: 10px;
  font-size: 14px;
  font-weight: 500;
  gap: 20px;

  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(2, 1fr) 50px;
    justify-items: center;
  }
`;

const Logo = styled.img``;

const Description = styled.div`
  width: 90%;

  @media ${breakpoint('md')} {
    text-align: center;
  }
`;

const Overview = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  @media ${breakpoint('md')} {
    align-items: center;
  }
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;

  @media ${breakpoint('md')} {
    grid-row-start: 2;
    grid-column: 1/4;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 10px;
`;

const Socials = styled.div`
  display: flex;
  column-gap: 20px;
  height: 30px;

  @media ${breakpoint('md')} {
    grid-row-start: 3;
  }
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
  Overview,
};

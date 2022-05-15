import styled, { css } from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';
import { StyledLink } from '../../shared/styles/links';
import ThemeColors from '../../shared/styles/theme';
import { DrawerProps, ProfileDropdownProps } from './Header';

const Header = styled.header`
  background-color: ${ThemeColors.headerColor};
  z-index: 100;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 10px;
  position: fixed;
  width: 100%;
`;

const HeaderLogo = styled.div``;

const HeaderBurger = styled.div`
  cursor: pointer;
  height: 100%;
  display: none;
  width: 60px;
  justify-content: center;
  align-items: center;
  border-right: 1px solid #363636;

  @media ${breakpoint('lg')} {
    display: flex;
  }
`;

const LeftNav = styled.div`
  height: 4rem;
  display: flex;
  align-items: center;
  column-gap: 30px;
`;

const RightNav = styled.div`
  display: flex;
  column-gap: 20px;
  height: 4rem;
`;

const HeaderNav = styled.div`
  display: flex;

  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Cart = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-self: center;
  padding: 0 25px;
  cursor: pointer;
  border-right: 1px solid #363636;
  border-left: 1px solid #363636;
`;

const CartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
`;

const CartCost = styled.div`
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Auth = styled.div`
  color: ${ThemeColors.white};
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AuthIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 5px;
`;

const AuthAction = styled.div`
  font-size: 12px;
  font-weight: 600;
`;

const ProfileDropdown = styled.div<ProfileDropdownProps>`
  ${({ isOpen }) => {
    const display = isOpen ? 'flex' : 'none';
    return css`
      width: 150px;
      padding: 7px;
      display: ${display};
      position: absolute;
      flex-direction: column;
      top: 70px;
      right: 5px;
      background-color: ${ThemeColors.headerColor};
      row-gap: 10px;
      border-radius: 3px;
    `;
  }}
`;

const ProfileAction = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;
  font-size: 13px;
  font-weight: 500;
`;

const ProfileLink = styled(StyledLink)`
  text-decoration: none;
  width: 100%;
`;

const HeaderDrawer = styled.div<DrawerProps>`
  ${({ isOpen }) => {
    const display = isOpen ? 'flex' : 'none';
    return css`
      display: ${display};
      position: absolute;
      left: 0;
      top: 4rem;
      background-color: ${ThemeColors.headerColor};
    `;
  }}
`;

export {
  Header,
  HeaderLogo,
  HeaderNav,
  RightNav,
  Cart,
  CartCost,
  CartIcon,
  Auth,
  AuthIcon,
  AuthAction,
  ProfileDropdown,
  ProfileAction,
  ProfileLink,
  HeaderBurger,
  LeftNav,
  HeaderDrawer,
};

import styled, { css } from 'styled-components';
import { breakpoint, breakpointUp } from '../../shared/styles/breakpoints';
import { StyledLink } from '../../shared/styles/links';
import ThemeColors from '../../shared/styles/theme';
import {
  DrawerProps,
  NavProps,
  ProfileDropdownProps,
  SearchProps,
} from './Header';

const Header = styled.header`
  background-color: ${ThemeColors.layoutColor};
  z-index: 100;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
`;

const Logo = styled.div`
  padding: 0 10px;
`;

const HeaderBurger = styled.div`
  cursor: pointer;
  height: 100%;
  display: none;
  width: 70px;
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
  column-gap: 10px;
`;

const RightNav = styled.div`
  display: flex;
  height: 4rem;
`;

const HeaderNav = styled.nav<NavProps>`
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
      @media ${breakpoint('lg')} {
        display: none;
      }
    `;
  }}
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

  @media ${breakpoint('sm')} {
    padding: 0 20px;
  }
`;

const CartIcon = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  position: relative;
`;

const CartProductsQuantity = styled.div`
  background-color: ${ThemeColors.secondColor};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  font-size: 9px;
  border-radius: 50%;
  color: ${ThemeColors.black};
  position: absolute;
  top: -3px;
  right: -3px;
`;

const CartCost = styled.div`
  font-weight: 600;
  font-size: 12px;
  display: flex;
  justify-content: center;
  align-self: center;
  margin-left: 10px;

  @media ${breakpoint('sm')} {
    display: none;
  }
`;

const Auth = styled.div`
  height: 100%;
  display: flex;
  padding: 0 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const AuthIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthAction = styled.div`
  font-size: 12px;
  font-weight: 600;
  margin-left: 5px;

  @media ${breakpoint('sm')} {
    display: none;
  }
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
      background-color: ${ThemeColors.layoutColor};
      row-gap: 10px;
      border-radius: 3px;
    `;
  }}
`;

const Search = styled.div<SearchProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  position: relative;
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
    const transform = isOpen ? 'translateX(0)' : 'translateX(-100%)';
    return css`
      transform: ${transform};
      display: flex;
      position: fixed;
      left: 0;
      top: 4rem;
      background-color: ${ThemeColors.layoutColor};
      width: 25%;
      height: 100%;
      transition: all 0.3s linear;

      @media ${breakpointUp('lg')} {
        transform: translateX(-100%);
      }

      @media ${breakpoint('md')} {
        width: 40%;

        @media ${breakpoint('sm')} {
          width: 100%;
        }
      }
    `;
  }}
`;

const DrawerNav = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
`;

export {
  Header,
  Logo,
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
  DrawerNav,
  Search,
  CartProductsQuantity,
};

import styled, { css } from 'styled-components';
import { StyledLink } from '../../shared/styles/links';
import ThemeColors from '../../shared/styles/theme';
import { ProfileDropdownProps } from './Header';

const Header = styled.header`
  background-color: ${ThemeColors.headerColor};
  z-index: 100;
  min-height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 15px;
  position: fixed;
  width: 100%;
`;

const HeaderLogo = styled.div``;

const HeaderNav = styled.div``;

const RightNav = styled.div`
  display: flex;
  column-gap: 20px;
  height: 4rem;
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
  pa
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
};

import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

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

const Auth = styled(NavLink)`
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
};

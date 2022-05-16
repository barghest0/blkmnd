import { Button, styled as MUIstyled } from '@mui/material';

import styled from 'styled-components';

const DrawerNav = styled.nav`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 60px);
`;

const NavItem = MUIstyled(Button)({});

export { DrawerNav, NavItem };

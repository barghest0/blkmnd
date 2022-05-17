import { styled as MUIstyled } from '@mui/material';
import { StyledNavLink } from '../../shared/styles/links';
import ThemeColors from '../../shared/styles/theme';

const DrawerNavLink = MUIstyled(StyledNavLink)({
  '&.active': {
    '& .MuiButton-root': {
      color: ThemeColors.secondColor,
    },
  },

  '& .MuiButton-root': {
    justifyContent: 'flex-start',
    padding: '0 25px',
    borderRadius: 0,
    color: ThemeColors.white,
  },
  '& .MuiTouchRipple-root': {
    color: ThemeColors.secondColor,
  },
});

export { DrawerNavLink };

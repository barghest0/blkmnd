import { Slider, styled } from '@mui/material';
import ThemeColors from '../../shared/styles/theme';

const VolumeSlider = styled(Slider)({
  height: 3,
  width: 100,
  padding: 0,
  color: ThemeColors.secondColor,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-thumb': {
    height: 0,
    width: 0,
    transition: 'all 0.2s linear',
    '&:hover': {
      boxShadow: 'none',
      height: 12,
      width: 12,
    },
    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
});

export { VolumeSlider };

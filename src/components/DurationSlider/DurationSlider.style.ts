import { Slider, styled } from '@mui/material';
import ThemeColors from '../../shared/styles/theme';

const DurationSlider = styled(Slider)({
  width: '100%',
  height: 3,
  padding: 0,
  display: 'block',
  color: ThemeColors.secondColor,
  '& .MuiSlider-rail': {
    backgroundColor: 'transparent',
  },
  '& .MuiSlider-thumb': {
    height: 15,
    width: 15,
    '&:hover, &.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
});

export { DurationSlider };

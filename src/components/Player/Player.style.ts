import styled, { css } from 'styled-components';
import { styled as MUIstyled } from '@mui/material';
import ThemeColors from '../../shared/styles/theme';
import { PlayerProps } from './Player';
import { Slider } from '@mui/material';

const Player = styled.div<PlayerProps>`
  ${({ isOpen }) => {
    const display = isOpen ? 'block' : 'none';
    return css`
      height: 70px;
      width: 100%;
      background-color: ${ThemeColors.headerColor};
      display: block;
      position: fixed;
      bottom: 0;
    `;
  }}
`;

const PlayButton = styled.div``;

const Duration = MUIstyled(Slider)({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: 3,
  padding: 0,
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

export { Player, PlayButton, Duration };

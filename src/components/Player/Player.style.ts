import styled, { css } from 'styled-components';
import { styled as MUIstyled } from '@mui/material';
import ThemeColors from '../../shared/styles/theme';
import { PlayerProps } from './Player';
import { Slider } from '@mui/material';

const Player = styled.div<PlayerProps>`
  ${({ isOpen }) => {
    const display = isOpen ? 'grid' : 'none';
    return css`
      height: 70px;
      width: 100%;
      background-color: ${ThemeColors.headerColor};
      display: ${display};
      grid-template-columns: 3fr 2fr 3fr;
      grid-template-rows: 100%;
      position: fixed;
      bottom: 0;
      align-items: center;
    `;
  }}
`;

const PlayerAudio = styled.audio``;

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

const Volume = MUIstyled(Slider)({
  height: 3,
  width: 100,
  padding: 0,
  color: ThemeColors.secondColor,
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

const Beat = styled.div`
  font-size: 12px;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr 1fr;
  align-items: center;
`;

const BeatInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 100%;
`;

const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Musician = styled.h4`
  color: #999897;
  font-weight: normal;
  cursor: default;
`;

const Share = styled.div``;

const AddToCart = styled.div`
  font-size: 14px;
  height: 30px;
  width: 100%;
`;

export {
  Player,
  PlayerAudio,
  PlayButton,
  Duration,
  Volume,
  Beat,
  Thumbnail,
  Title,
  Musician,
  Share,
  AddToCart,
  BeatInfo,
};

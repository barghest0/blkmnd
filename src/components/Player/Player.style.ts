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
      grid-template-columns: 2.7fr 2fr 3fr;
      grid-template-rows: 100%;
      position: fixed;
      bottom: 0;
      align-items: center;
    `;
  }}
`;

const PlayerAudio = styled.audio``;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
`;

const PreviousBeat = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NextBeat = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  position: relative;
`;

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
  min-width: 120px;
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
  min-width: 85px;
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-self: flex-end;
  padding-right: 20px;
  column-gap: 10px;
`;

const Volume = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
`;

const VolumeSlider = MUIstyled(Slider)({
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

const Queue = styled.div`
  cursor: pointer;
`;

export {
  Player,
  PlayerAudio,
  PlayButton,
  Duration,
  VolumeSlider,
  Beat,
  Thumbnail,
  Title,
  Musician,
  Share,
  AddToCart,
  BeatInfo,
  Volume,
  Queue,
  Actions,
  Controls,
  PreviousBeat,
  NextBeat,
};

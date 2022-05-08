import { Slider, styled as MUIstyled } from '@mui/material';
import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const DiscographyList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
`;

const Beat = styled.div`
  display: flex;
  column-gap: 20px;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.div`
  position: absolute;
`;

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

const Title = styled.div``;

const Musician = styled.div`
  font-size: 14px;
`;

const Player = MUIstyled(Slider)({
  justifySelf: 'flex-end',
  height: 3,
  width: '100%',
  padding: 0,
  color: ThemeColors.secondColor,
  '& .MuiSlider-track': {
    border: 'none',
  },
  '& .MuiSlider-rail': {
    backgroundColor: '#343434',
  },
  '& .MuiSlider-thumb': {
    height: 12,
    width: 12,
    transition: 'all 0.2s linear',
    '&:hover': {
      boxShadow: 'none',
    },
    '&.Mui-focusVisible': {
      boxShadow: 'none',
    },
  },
});

export {
  DiscographyList,
  Beat,
  Thumbnail,
  Info,
  Title,
  Musician,
  Player,
  ThumbnailContainer,
  PlayButton,
};

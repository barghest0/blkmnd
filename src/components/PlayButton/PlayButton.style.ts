import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';

import ThemeColors from '../../shared/styles/theme';

const PlayButton = styled.div`
  cursor: pointer;
  width: 100%;
  height: 100%;
  background-color: ${ThemeColors.secondColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayIcon = styled(PlayArrowIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 60%;
    height: 60%;
  }
`;

const PauseIcon = styled(PauseSharpIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 60%;
    height: 60%;
  }
`;

export { PlayButton, PlayIcon, PauseIcon };

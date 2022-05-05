import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import ThemeColors from '../../shared/styles/theme';

const PlayButton = styled.div`
  cursor: pointer;
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: ${ThemeColors.secondColor};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PlayIcon = styled(PlayArrowIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 30px;
    height: 30px;
  }
`;

const PauseIcon = styled(PauseSharpIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 30px;
    height: 30px;
  }
`;

export { PlayButton, PlayIcon, PauseIcon };

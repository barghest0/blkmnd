import styled from 'styled-components';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ThemeColors from '../../shared/styles/theme';
import PauseSharpIcon from '@mui/icons-material/PauseSharp';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import ShareOutlinedIcon from '@mui/icons-material/ShareOutlined';

const PreviewBeat = styled.div`
  display: flex;
  column-gap: 20px;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

const ActionCircle = styled.div`
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

const PlayButton = styled(PlayArrowIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 30px;
    height: 30px;
  }
`;

const PauseButton = styled(PauseSharpIcon)`
  &.override {
    fill: ${ThemeColors.black};
    width: 30px;
    height: 30px;
  }
`;

const Thumbnail = styled.img``;

const Info = styled.div``;

const Description = styled.div`
  display: flex;
  font-size: 13px;
  column-gap: 5px;
  font-weight: 600;
`;

const Featured = styled.div``;

const Bpm = styled.div``;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 15px;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 105px repeat(2, 40px) repeat(2, auto);
  grid-template-rows: 40px;
  column-gap: 10px;
`;

const AddToCartIcon = styled(ShoppingBagOutlinedIcon)``;

const DownloadIcon = styled(FileDownloadOutlinedIcon)``;

const ShareIcon = styled(ShareOutlinedIcon)``;

export {
  PreviewBeat,
  Title,
  Thumbnail,
  ThumbnailContainer,
  PlayButton,
  ActionCircle,
  PauseButton,
  Info,
  Description,
  Featured,
  Bpm,
  Actions,
  AddToCartIcon,
  DownloadIcon,
  ShareIcon,
};

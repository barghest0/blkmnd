import styled from 'styled-components';
import { container, page } from '../../shared/styles/mixins';

const Beat = styled.div`
  ${page};
  padding-top: 0;
`;

const Container = styled.div`
  ${container}
`;

const TitleContainer = styled.div`
  display: flex;
  column-gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const PlayButton = styled.div`
  width: 25px;
  height: 25px;
`;

const Title = styled.h1`
  font-size: 32px;
`;

const Content = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
`;

const ContentInner = styled.div`
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 1fr 1fr 1fr 40px 160px;
  column-gap: 20px;
  z-index: 20;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  opacity: 0.3;
  filter: blur(3px);
  z-index: 10;
  pointer-events: none;
`;

const BackgroundGradient = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 11;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(16, 16, 16, 1));
`;

const Thumbnail = styled.img`
  display: block;
  width: 180px;
  height: 180px;
  cursor: pointer;
  grid-row: 1/5;
`;

const Musician = styled.p`
  font-weight: 500;
`;

const Visualizer = styled.div`
  padding: 0 10px;
  grid-column: 1/3;
`;

const BeatInfo = styled.div`
  display: flex;
  column-gap: 10px;
  margin-bottom: 20px;
`;

const Comment = styled.div`
  margin-bottom: 30px;
`;

const Info = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 5px;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr 1fr 2fr 3fr;
  grid-template-rows: 40px;
  column-gap: 10px;
`;

const Action = styled.div``;

const Tags = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
  grid-column-start: 5;
`;

const Tag = styled.div``;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-weight: 400;
  position: relative;
  ::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #1c1c1c;
    bottom: 0px;
    opacity: 0.6;
  }
  margin-bottom: 20px;
`;

const TabPanel = styled.div``;

export {
  Beat,
  BeatInfo,
  TabPanel,
  Container,
  Title,
  Content,
  Thumbnail,
  Actions,
  Tags,
  Action,
  Tag,
  TitleContainer,
  PlayButton,
  Musician,
  Visualizer,
  Info,
  Tabs,
  Comment,
  Background,
  ContentInner,
  BackgroundGradient,
};

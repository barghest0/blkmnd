import styled from 'styled-components';
import { container, page } from '../../shared/styles/mixins';

const Beat = styled.div`
  ${page}
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
  display: grid;
  height: 200px;
  grid-template-columns: 180px 1fr;
  grid-template-rows: 1fr 1fr 1fr 3fr;
  column-gap: 20px;
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
};

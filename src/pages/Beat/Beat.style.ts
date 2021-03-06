import styled from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import { container, page, textOverflow } from 'shared/styles/mixins';

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
  justify-self: flex-start;
  width: 100%;
  ${textOverflow};
`;

const PlayButton = styled.div`
  width: 25px;
  min-width: 25px;
  height: 25px;
`;

const Title = styled.h1`
  font-size: 32px;

  ${textOverflow}
`;

const Content = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
  position: relative;
  overflow: hidden;
`;

const ContentInner = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  grid-template-rows: 1fr 250px;
  column-gap: 20px;
  z-index: 20;
  position: relative;

  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    grid-template-rows: 200px 1fr 150px;
    justify-items: center;
  }
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

const ContentInfo = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 1fr);
  ${textOverflow}

  @media ${breakpoint('md')} {
    width: 100%;
    grid-row-start: 2;
  }

  @media ${breakpoint('sm')} {
    grid-template-rows: repeat(3, 1fr) 150px;
    justify-items: center;
  }
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
  width: 200px;
  height: 200px;
  cursor: pointer;
`;

const Musician = styled.p`
  font-weight: 500;
  font-size: 16px;
  text-transform: uppercase;
`;

const Visualizer = styled.div`
  padding: 0 10px;
  grid-column: 1/3;
`;

const BeatInfo = styled.div`
  display: flex;
  column-gap: 10px;
`;

const Comments = styled.div``;

const Comment = styled.div``;

const CommentField = styled.div`
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
  grid-template-columns: 1fr 40px minmax(90px, 1fr) 1.5fr 3fr;
  grid-template-rows: 40px;
  column-gap: 10px;
  align-self: center;

  @media ${breakpoint('sm')} {
    row-gap: 10px;
    grid-template-columns: 100px 40px 100px;
    grid-template-rows: repeat(3, 40px);
  }
`;

const Buy = styled.div``;

const Download = styled.div``;

const Share = styled.div``;

const Tags = styled.div`
  display: grid;
  grid-auto-flow: column;
  column-gap: 10px;
  grid-column-start: 5;

  @media ${breakpoint('sm')} {
    grid-column: 1/4;
  }
`;

const Tag = styled.div`
  min-width: 100px;
`;

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
  Buy,
  Download,
  Share,
  Tag,
  TitleContainer,
  PlayButton,
  Musician,
  Visualizer,
  Info,
  Tabs,
  Comments,
  Background,
  ContentInner,
  BackgroundGradient,
  CommentField,
  Comment,
  ContentInfo,
};

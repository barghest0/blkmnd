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

const Visualizer = styled.div``;

export {
  Beat,
  Container,
  Title,
  Content,
  Thumbnail,
  TitleContainer,
  PlayButton,
  Musician,
  Visualizer,
};

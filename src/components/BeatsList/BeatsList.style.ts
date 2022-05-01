import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const BeatsList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: repeat(10, 50px);
  padding: 0 5px;
  row-gap: 20px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 5% 45% 10% 5% 20% 1fr;
  align-items: center;
  column-gap: 10px;
`;

const HeadColumn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: ${ThemeColors.actionColor};
  font-size: 11px;
`;

const Column = styled.div`
  color: ${ThemeColors.white};
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const ThumbnailContainer = styled.div`
  width: 100%;
  height: 100%;
`;

const Thumbnail = styled.img`
  border-radius: 4px;
  width: 100%;
  height: auto;
  display: block;
`;

const Tags = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
  height: 100%;
`;

export {
  BeatsList,
  Row,
  HeadColumn,
  Column,
  Thumbnail,
  ThumbnailContainer,
  Tags,
};

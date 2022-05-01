import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const BeatsList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 5px;
  row-gap: 10px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 1fr 1fr 3fr 3fr;
  grid-template-rows: 40px;
  align-items: center;
  column-gap: 10px;
  padding: 10px 0;
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

const Thumbnail = styled.img`
  border-radius: 4px;
  display: block;
`;

const Tags = styled.div`
  display: flex;
  column-gap: 10px;
  width: 100%;
  height: 100%;
`;

const Actions = styled.div`
  display: flex;
  column-gap: 10px;
  height: 100%;
`;

export { BeatsList, Row, HeadColumn, Column, Thumbnail, Actions, Tags };

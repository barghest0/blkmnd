import styled, { css } from 'styled-components';
import ThemeColors from '../../shared/styles/theme';
import { BeatRowProps } from './BeatsList';

const BeatsList = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  padding: 0 5px;
  row-gap: 10px;
`;

const Row = styled.div<BeatRowProps>`
  ${({ isActive }) => {
    const color = isActive ? ThemeColors.secondColor : ThemeColors.white;
    return css`
      display: grid;
      grid-template-columns: 0.5fr 5fr 1fr 1fr 3fr 3fr;
      grid-template-rows: 40px;
      align-items: center;
      color: ${color};
      column-gap: 10px;
      padding: 10px 0;
      cursor: pointer;
      border-bottom: 1px solid #343434;
      &:nth-child(1) {
        border-bottom: none;
      }
    `;
  }}
`;

const HeadColumn = styled.div`
  text-transform: uppercase;
  font-weight: 700;
  color: ${ThemeColors.actionColor};
  font-size: 11px;
`;

const Column = styled.div`
  color: inherit;
  font-size: 15px;
  font-weight: 600;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const Title = styled.h4``

const Tag = styled.div`
  width:100%;
  height:100%
`

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
  display: grid;
  grid-template-columns: 1fr 1fr 3fr;
  column-gap: 10px;
  height: 100%;
  width: 100%;
`;

const Action = styled.div``;

export { BeatsList, Row, HeadColumn, Column, Thumbnail, Actions, Tags, Action, Title, Tag };

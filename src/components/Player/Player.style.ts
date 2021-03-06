import styled, { css } from 'styled-components';

import { breakpoint } from 'shared/styles/breakpoints';
import ThemeColors from 'shared/styles/theme';

type PlayerProps = {
  isOpen: boolean;
  isQueueListOpen: boolean;
};

type QueueBeatProps = {
  isActive: boolean;
};

const Player = styled.div<PlayerProps>`
  ${({ isOpen, isQueueListOpen }) => {
    const display = isOpen ? 'block' : 'none';
    const bottom = isQueueListOpen ? '150px' : 0;
    return css`
      z-index: 100;
      display: ${display};
      height: 70px;
      width: 100%;
      background-color: ${ThemeColors.layoutColor};
      position: fixed;
      bottom: ${bottom};
      transition: all 0.2s linear;
    `;
  }}
`;

const PlayerControls = styled.div`
  display: grid;
  grid-template-columns: 2.7fr 2fr 3fr;
  grid-template-rows: 100%;
  column-gap: 10px;
  align-items: center;

  @media ${breakpoint('md')} {
    grid-template-columns: 2.7fr 2fr 2fr 30px;
  }

  @media ${breakpoint('sm')} {
    grid-template-columns: minmax(100px, 300px) 1fr;
  }
`;

const Controls = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;

  @media ${breakpoint('md')} {
    grid-column-start: 3;
  }
`;

const Shuffle = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const Loop = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  margin: 0 10px;

  @media ${breakpoint('lg')} {
    display: none;
  }
`;

const PreviousBeat = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const NextBeat = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
`;

const PlayButton = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
`;

const Duration = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
  color: ${ThemeColors.secondColor};
`;

const Beat = styled.div`
  font-size: 12px;
  column-gap: 20px;
  display: grid;
  grid-template-columns: 0.5fr 2fr 0.5fr 1fr;
  align-items: center;
`;

const BeatInfo = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-width: 100px;

  @media ${breakpoint('sm')} {
    grid-column: 2/5;
  }
`;

const Thumbnail = styled.img`
  width: 70px;
  height: 100%;
`;

const Title = styled.h3`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Musician = styled.h4`
  color: #999897;
  font-weight: normal;
  cursor: default;
`;

const Share = styled.div`
  @media ${breakpoint('sm')} {
    display: none;
  }
`;

const Buy = styled.div`
  font-size: 14px;
  height: 30px;
  width: 100%;
  min-width: 85px;
  @media ${breakpoint('sm')} {
    display: none;
  }
`;

const Actions = styled.div`
  display: flex;
  align-items: center;
  padding-right: 20px;
  justify-content: flex-end;
  column-gap: 10px;
  width: 100%;
  @media ${breakpoint('sm')} {
    display: none;
  }
`;

const Volume = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;

  @media ${breakpoint('md')} {
    display: none;
  }
`;

const Queue = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;

  @media ${breakpoint('md')} {
    width: 100%;
  }
`;

const QueueList = styled.div`
  background-color: inherit;
  height: 150px;
  width: 100%;
  padding: 10px;
  display: grid;
  overflow: auto;
`;

const QueueBeat = styled.div<QueueBeatProps>`
  ${({ isActive }) => {
    const color = isActive ? ThemeColors.secondColor : ThemeColors.white;
    return css`
      color: ${color};
      height: 50px;
      width: 100%;
      cursor: pointer;
    `;
  }}
`;

export {
  Player,
  PlayButton,
  Duration,
  Beat,
  Thumbnail,
  Title,
  Musician,
  Share,
  Buy,
  BeatInfo,
  Volume,
  Queue,
  Actions,
  Controls,
  PreviousBeat,
  NextBeat,
  QueueList,
  QueueBeat,
  PlayerControls,
  Shuffle,
  Loop,
};

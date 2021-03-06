import styled from 'styled-components';

import ThemeColors from 'shared/styles/theme';

const DiscographyCard = styled.div`
  display: flex;
  column-gap: 20px;
  align-items: center;
  min-width: 350px;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
`;

const Thumbnail = styled.div`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  display: grid;
  padding: 5px 0;
  height: 100%;
  row-gap: 5px;
`;

const Title = styled.div``;

const Musician = styled.div`
  font-size: 14px;
`;

const Duration = styled.div`
  width: 100%;
  justify-self: flex-end;
  height: 3px;
  background-color: ${ThemeColors.dark};
  position: relative;
  bottom: 0;
  align-self: center;
`;

export {
  DiscographyCard,
  Thumbnail,
  Info,
  Title,
  Musician,
  Duration,
  ThumbnailContainer,
  PlayButton,
};

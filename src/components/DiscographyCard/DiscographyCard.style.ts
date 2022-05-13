import styled from 'styled-components';

const DiscographyCard = styled.div`
  display: flex;
  column-gap: 20px;
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

const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5px 0;
`;

const Title = styled.div``;

const Musician = styled.div`
  font-size: 14px;
`;

const Duration = styled.div`
  width: 100%;
  justify-self: flex-end;
  height: 3px;
  background-color: #363636;
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

import styled from 'styled-components';

const FeaturedBeat = styled.div`
  display: grid;
  grid-template-columns: 130px 1fr;
  grid-template-rows: 150px;
  gap: 20px;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
`;

const Thumbnail = styled.img``;

const Info = styled.div`
  overflow: hidden;
`;

const PlayButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Description = styled.div`
  display: flex;
  font-size: 13px;
  column-gap: 5px;
  font-weight: 600;
`;

const Featured = styled.div``;

const Bpm = styled.div``;

const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Actions = styled.div`
  display: grid;
  grid-template-columns: 105px repeat(2, 40px) repeat(2, minmax(100px, 150px));
  grid-template-rows: 40px;
  column-gap: 10px;
`;

const Action = styled.div``;

export {
  FeaturedBeat,
  Title,
  Thumbnail,
  ThumbnailContainer,
  Info,
  Description,
  Featured,
  Bpm,
  Actions,
  Action,
  PlayButton,
};

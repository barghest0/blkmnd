import styled from 'styled-components';

const SoundKitsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
  justify-items: center;
`;

const SoundKit = styled.div`
  width: 175px;
`;

const Thumbnail = styled.img`
  margin-bottom: 5px;
`;

const Title = styled.h3`
  white-space: nowrap;
  text-overflow: ellipsis;
  text-align: center;
  overflow: hidden;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Price = styled.div`
  text-align: center;
  font-size: 14px;
`;

export { SoundKitsList, SoundKit, Thumbnail, Title, Price };

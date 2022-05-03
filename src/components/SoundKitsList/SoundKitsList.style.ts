import styled from 'styled-components';

const SoundKitsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow:column;
  column-gap: 40px;
`;

const SoundKit = styled.div``;

const Thumbnail = styled.img`
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

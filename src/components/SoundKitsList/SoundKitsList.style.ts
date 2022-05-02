import styled from 'styled-components';

const SoundKitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 20px;
`;

const SoundKit = styled.div``;

const Thumbnail = styled.img`
  width: 100%;
`;

export { SoundKitsList, SoundKit, Thumbnail };

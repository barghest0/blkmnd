import styled from 'styled-components';



const SoundKitCard = styled.div`
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

export { SoundKitCard, Thumbnail, Title, Price };

import styled from 'styled-components';

const SoundKitCard = styled.div`
  width: 100%;
  flex-direction: column;
  display: flex;
  justify-content: center;
`;

const Thumbnail = styled.div`
  width: 100%;
  min-height: 180px;
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

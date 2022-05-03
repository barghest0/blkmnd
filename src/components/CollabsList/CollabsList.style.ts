import styled from 'styled-components';

const CollabsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
`;

const Collab = styled.div`
  width: 175px;
`;

const Thumbnail = styled.img`
  margin-bottom: 5px;
`;

const Title = styled.h3`
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
  margin-bottom: 5px;
`;

const Price = styled.p`
  text-align: center;
  font-size: 14px;
`;

export { CollabsList, Collab, Thumbnail, Title, Price };

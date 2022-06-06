import styled from 'styled-components';

import { container, page, pageTitle } from 'shared/styles/mixins';

const Collabs = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const CollabsList = styled.div`
  display: grid;
  column-gap: 40px;
  row-gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(250px, 1fr));

  justify-items: center;
`;

export {
 Collabs, Title, Container, CollabsList 
};

import styled from 'styled-components';

import { container, page, pageTitle } from 'shared/styles/mixins';

const Membership = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
`;

const MembershipList = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(500px, 1fr));
  gap: 40px;
`;

export { Membership, Container, Title, MembershipList };

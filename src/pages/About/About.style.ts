import styled from 'styled-components';

import { container, page, pageTitle } from 'shared/styles/mixins';
import { breakpoint } from 'shared/styles/breakpoints';

const About = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle};
`;

const Biography = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr;
  gap: 50px;
  overflow: hidden;
  margin-bottom: 50px;

  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 0.5fr;
  }
`;

const SectionTitle = styled.h2`
  margin-bottom: 50px;
  font-size: 28px;
`;

const BiographyText = styled.p`
  grid-column-start: 1;
  @media ${breakpoint('md')} {
    grid-row-start: 2;
  }
`;

const BiographyImage = styled.img`
  grid-column-start: 2;
  grid-row: 1/2;
  width: 100%;

  @media ${breakpoint('md')} {
    grid-column-start: 1;
    width: auto;
    height: 100%;
    justify-self: center;
  }

  @media ${breakpoint('sm')} {
    width: 100%;
  }
`;

const DiscographyList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
`;

const Discography = styled.section`
  margin-bottom: 50px;
`;

const Gallery = styled.section``;

const GalleryImage = styled.img`
  width: 100%;
  height: 100%;
`;

export {
  About,
  Container,
  Title,
  BiographyImage,
  BiographyText,
  Biography,
  SectionTitle,
  Discography,
  Gallery,
  GalleryImage,
  DiscographyList,
};

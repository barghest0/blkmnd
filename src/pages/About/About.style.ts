import styled from 'styled-components';
import { container, page, pageTitle } from '../../shared/styles/mixins';

const About = styled.div`
  ${page}
`;

const Container = styled.div`
  ${container}
`;

const Title = styled.h1`
  ${pageTitle}
  margin-bottom:20px
`;

const Biography = styled.section`
  display: grid;
  grid-template-rows: 70px 500px;
  grid-template-columns: repeat(2, 1fr);
  overflow: hidden;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  margin-bottom: 20px;
  font-size: 28px;
`;

const BiographyText = styled.p`
  grid-column-start: 1;
`;

const BiographyImage = styled.img`
  grid-column-start: 2;
  grid-row: 1/2;
`;

const Discography = styled.section``;

export {
  About,
  Container,
  Title,
  BiographyImage,
  BiographyText,
  Biography,
  SectionTitle,
  Discography,
};

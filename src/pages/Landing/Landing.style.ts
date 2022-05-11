import styled from 'styled-components';
import { container } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const Landing = styled.div``;

const Container = styled.div`
  ${container}
`;

const Intro = styled.section`
  background: url(${require('./images/main-background.jpg')}) top center;
  background-size: scale;
  padding-top: 10rem;
  margin-bottom: 20px;
`;

const IntroInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const Visualizer = styled.div`
  margin: 0 auto;
`;

const IntroTitle = styled.h1`
  color: ${ThemeColors.secondColor};
  font-size: 48px;
  text-align: center;
  text-transform: uppercase;
  margin: 10px 0;
`;

const Search = styled.div`
  margin-bottom: 40px;
  height: 70px;
`;

const FeaturedBeat = styled.div``;

const BeatsList = styled.section`
  margin-bottom: 20px;
`;

const AllTracksLink = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 50px;
  margin-bottom: 50px;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Licenses = styled.section`
  padding: 50px 0;
  background-color: ${ThemeColors.black};
  margin-bottom: 50px;
`;

const LicensesList = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  justify-items: center;
  column-gap: 50px;
`;

const SoundKits = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const SoundKitsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
  justify-items: center;
`;

const AllSoundKits = styled.div`
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Services = styled.section`
  display: flex;
  justify-content: center;
  margin-bottom: 50px;
`;

const CollabsList = styled.div`
  display: grid;
  margin: 0 auto;
  grid-auto-flow: column;
  column-gap: 40px;
  justify-items: center;
`;

const AllServices = styled.div`
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Discography = styled.section`
  margin-bottom: 50px;
`;

const DiscographyList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 50px;
`;

const Contact = styled.div``;

const ContactForm = styled.div``;

export {
  Landing,
  Intro,
  IntroTitle,
  Search,
  IntroInner,
  FeaturedBeat,
  Container,
  BeatsList,
  AllTracksLink,
  Licenses,
  LicensesList,
  SoundKits,
  SoundKitsList,
  AllSoundKits,
  Services,
  AllServices,
  SectionTitle,
  Contact,
  ContactForm,
  Discography,
  DiscographyList,
  CollabsList,
  Visualizer,
};

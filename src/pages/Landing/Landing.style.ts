import styled from 'styled-components';
import { breakpoint } from '../../shared/styles/breakpoints';
import { container } from '../../shared/styles/mixins';
import ThemeColors from '../../shared/styles/theme';

const Landing = styled.div``;

const Container = styled.div`
  ${container}
`;

const Intro = styled.section`
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(16, 16, 16, 1)),
    url(${require('./images/main-background.jpg')}) top center;
  background-size: scale;
  padding-top: 10rem;
  margin-bottom: 20px;

  @media ${breakpoint('md')} {
    padding-top: 5rem;
  }
`;

const IntroInner = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin: 0 auto;
`;

const Visualizer = styled.div`
  margin: 0 auto;
  max-width: 1000px;
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
  display: block;

  @media ${breakpoint('md')} {
    display: none;
  }
`;

const SearchFieldContainer = styled.div`
  background-color: ${ThemeColors.white};
  width: 100%;
  height: 70px;
  padding: 10px;
  padding-left: 15px;
  border-radius: 4px;
  display: flex;
`;

const SearchField = styled.input`
  background: transparent;
  border: none;
  outline: none;
  width: 100%;
  height: 100%;
  font-size: 16px;
  ::placeholder {
    font-size: 18px;
  }
`;

const SearchSubmit = styled.div`
  width: 15%;
  height: 100%;
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
  grid-template-columns: repeat(5, minmax(165px, 1fr));
  justify-items: center;
  column-gap: 50px;
`;

const SoundKits = styled.section`
  margin-bottom: 50px;
`;

const SoundKitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(175px, 1fr));
  margin: 0 auto;
  justify-items: center;
  column-gap: 50px;
  max-width: 900px;
`;

const AllSoundKits = styled.div`
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
`;

const Services = styled.section`
  margin-bottom: 50px;
`;

const CollabsList = styled.div`
  display: grid;
  column-gap: 40px;
  margin: 0 auto;
  grid-template-columns: 175px;
  justify-content: center;
  justify-items: center;
  max-width: 900px;
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
  grid-template-rows: 100px;
  column-gap: 50px;
`;

const Contact = styled.div``;

const ContactForm = styled.div`
  margin: 0 auto;
  width: 50%;

  @media ${breakpoint('md')} {
    width: 80%;
  }
`;

export {
  Landing,
  Intro,
  IntroTitle,
  Search,
  SearchField,
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
  SearchFieldContainer,
  SearchSubmit,
};

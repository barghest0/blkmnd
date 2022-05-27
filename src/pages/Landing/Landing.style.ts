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
  padding: 0 10px;
  @media ${breakpoint('sm')} {
    height: 80px;
  }
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

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 50px;
`;

const Section = styled.section`
  margin-bottom: 20px;
  padding: 20px 0;
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

const SoundKitsList = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 175px);
  margin: 0 auto;
  justify-items: center;
  column-gap: 50px;
  max-width: 900px;
`;

const DetailsButton = styled.div`
  height: 50px;
  width: 200px;
  margin: 0 auto;
  margin-top: 50px;
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

const YoutubeContaier = styled.div`
  ${container};
  max-width: 900px;
`;

const Youtube = styled.section`
  margin-bottom: 50px;
  background: linear-gradient(rgba(16, 16, 16, 1) 0%, rgba(0, 0, 0, 0) 20%),
    linear-gradient(rgba(0, 0, 0, 0) 80%, rgba(16, 16, 16, 1) 100%),
    url(${require('./images/main-background.jpg')}) top center;
`;

const YoutubeInner = styled.div`
  display: grid;
  grid-template-columns: 200px 1fr;
  height: 100%;
  align-items: center;
  padding: 50px 0;
  justify-items: center;

  @media ${breakpoint('md')} {
    grid-template-columns: 1fr;
    row-gap: 40px;
    & iframe {
      width: 100%;
    }
  }
`;

const ChannelInfo = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 60px) 30px;
  row-gap: 30px;
`;

const Info = styled.div`
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: (2, 30px);
  column-gap: 20px;
`;

const InfoTitle = styled.p`
  font-size: 16px;
`;

const InfoText = styled.p`
  grid-column-start: 2;
  font-weight: 600;
  font-size: 22px;
`;

const Subscribe = styled.div``;

const SubscribeButton = styled.a`
  font-weight: 600;
  text-transform: uppercase;
  background: ${ThemeColors.secondColor};
  color: ${ThemeColors.black};
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-decoration: none;
`;

const Video = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InfoIcon = styled.div`
  padding: 15px;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  border: 1px solid ${ThemeColors.white};
  display: flex;
  justify-content: center;
  align-items: center;
  grid-row: 1/3;
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
    width: 90%;
  }

  @media ${breakpoint('sm')} {
    width: 100%;
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
  Licenses,
  LicensesList,
  SoundKitsList,
  DetailsButton,
  SectionTitle,
  Contact,
  ContactForm,
  DiscographyList,
  Section,
  CollabsList,
  Visualizer,
  SearchFieldContainer,
  SearchSubmit,
  Youtube,
  ChannelInfo,
  Info,
  InfoText,
  Video,
  YoutubeInner,
  InfoIcon,
  InfoTitle,
  YoutubeContaier,
  Subscribe,
  SubscribeButton,
};

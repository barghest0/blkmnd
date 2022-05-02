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
  max-width: 650px;
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

const Licenses = styled.section`
  padding: 50px 0;
  background-color: ${ThemeColors.black};
  margin-bottom: 50px;
`;

const LicensesTitle = styled.h2`
  font-size: 28px;
  text-align: center;
  font-weight: 600;
  margin-bottom: 50px;
`;

const LicensesList = styled.div``;

const SoundKits = styled.div``;

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
  LicensesTitle,
  LicensesList,
  SoundKits,
};

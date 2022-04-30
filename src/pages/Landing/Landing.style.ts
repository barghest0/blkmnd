import styled from 'styled-components';
import ThemeColors from '../../shared/styles/theme';

const Landing = styled.section``;

const Intro = styled.div`
  background: url(${require('./images/main-background.jpg')}) top center;
  background-size: scale;
  padding-top: 10rem;
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

const PreviewBeat = styled.div``;

export { Landing, Intro, IntroTitle, Search, IntroInner, PreviewBeat };

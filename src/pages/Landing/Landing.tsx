import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './Landing.style';

import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { getFeaturedBeat, getPreviewBeats } from '../../redux/beats/actions';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink, StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';

const Landing = () => {
  const { featuredBeat, beats, isFetching } = useTypedSelector(
    state => state.beats,
  );
  const dispatch = useDispatch();
  const isBeatFetching = isFetching || !featuredBeat;

  useEffect(() => {
    dispatch(getFeaturedBeat(1));
    dispatch(getPreviewBeats());
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.IntroInner>
          <S.IntroTitle>Someone beatstore</S.IntroTitle>
          <S.Search>
            <SearchField hasButton buttonText={'search'} />
          </S.Search>
          <S.FeaturedBeat>
            {isBeatFetching ? (
              <Preloader />
            ) : (
              <FeaturedBeat beat={featuredBeat} />
            )}
          </S.FeaturedBeat>
        </S.IntroInner>
      </S.Intro>
      <S.Container>
        <S.BeatsList>
          {isFetching ? <Preloader /> : <BeatsList beats={beats} />}
        </S.BeatsList>
        <S.AllTracksLink>
          <ButtonLink to={RouterPaths.beats}>Browse all tracks</ButtonLink>
        </S.AllTracksLink>
      </S.Container>
    </S.Landing>
  );
};

export default Landing;

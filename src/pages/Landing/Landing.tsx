import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './Landing.style';

import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { getFeaturedBeat, getPreviewBeats } from '../../redux/beats/actions';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import Modal from '../../components/Modal/Modal';

const Landing = () => {
  const { featuredBeat, beats, isFetching } = useTypedSelector(
    state => state.beats,
  );
  const dispatch = useDispatch();
  const isBeatFetching = isFetching || !featuredBeat;
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const onDownloadButtonClick = () => {
    setIsDownloadOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const onShareButtonClick = () => {
    setIsShareOpen(true);
    document.body.style.overflow = 'hidden';
  };

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
              <FeaturedBeat
                beat={featuredBeat}
                onDownloadClick={onDownloadButtonClick}
                onShareClick={onShareButtonClick}
              />
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
      <Modal isOpen={isDownloadOpen} setIsOpen={setIsDownloadOpen}>
        download modal
      </Modal>
      <Modal isOpen={isShareOpen} setIsOpen={setIsShareOpen}>
        share modal
      </Modal>
    </S.Landing>
  );
};

export default Landing;

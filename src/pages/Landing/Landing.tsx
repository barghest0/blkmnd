import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import * as S from './Landing.style';
import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { getPreviewBeats } from '../../redux/beats/actions';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import Modal from '../../components/Modal/Modal';
import { getBeat, getFeaturedBeat } from '../../redux/beat/actions';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import ShareModal from '../../components/ShareModal/ShareModal';

const Landing = () => {
  const { beats, isFetching } = useTypedSelector(state => state.beats);

  const { featuredBeat, beat } = useTypedSelector(state => state.beat);

  const dispatch = useDispatch();

  const isFeaturedBeatFetching = !featuredBeat;

  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const getContent = (id: number) => {
    dispatch(getBeat(id));
  };

  const getModalContent = useCallback(getContent, [
    isShareOpen,
    isDownloadOpen,
  ]);

  const onDownloadButtonClick = (id: number) => {
    setIsDownloadOpen(true);
    getModalContent(id);
    document.body.style.overflow = 'hidden';
  };

  const onShareButtonClick = (id: number) => {
    setIsShareOpen(true);
    getModalContent(id);
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
            {isFeaturedBeatFetching ? (
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
          {isFetching ? (
            <Preloader />
          ) : (
            <BeatsList
              onDownloadClick={onDownloadButtonClick}
              onShareClick={onShareButtonClick}
              beats={beats}
            />
          )}
        </S.BeatsList>
        <S.AllTracksLink>
          <ButtonLink to={RouterPaths.beats}>Browse all tracks</ButtonLink>
        </S.AllTracksLink>
      </S.Container>
      <DownloadModal
        isOpen={isDownloadOpen}
        setIsOpen={setIsDownloadOpen}
        beat={beat}
      />
      <ShareModal
        isOpen={isShareOpen}
        setIsOpen={setIsShareOpen}
        link={'something link'}
      />
    </S.Landing>
  );
};

export default Landing;

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
import { getBeat, getFeaturedBeat } from '../../redux/beat/actions';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import ShareModal from '../../components/ShareModal/ShareModal';
import LicensesModal from '../../components/LicensesModal/LicensesModal';
import { getLicenses } from '../../redux/licenses/actions';
import LicensesList from '../../components/LicensesList/LicensesList';
import { getPreviewSoundKits } from '../../redux/soundKits/actions';
import SoundKitsList from '../../components/SoundKitsList/SoundKitsList';

const Landing = () => {
  const { beats, isFetching } = useTypedSelector(state => state.beats);
  const { featuredBeat, beat } = useTypedSelector(state => state.beat);
  const { licenses, isFetching: isLicensesFetching } = useTypedSelector(
    state => state.licenses,
  );
  const { soundKits, isFetching: isSoundKitsFetching } = useTypedSelector(
    state => state.soundKits,
  );

  const dispatch = useDispatch();

  const isFeaturedBeatFetching = !featuredBeat;

  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLicensesOpen, setIsLecensesOpen] = useState(false);

  const getContent = (id: number) => {
    dispatch(getBeat(id));
  };

  const getModalContent = useCallback(getContent, [
    isShareOpen,
    isDownloadOpen,
  ]);

  const makeOnActionClick =
    (setAction: (state: boolean) => void) => (id: number) => {
      setAction(true);
      getModalContent(id);
      document.body.style.overflow = 'hidden';
    };

  useEffect(() => {
    dispatch(getFeaturedBeat());
    dispatch(getPreviewBeats());
    dispatch(getLicenses());
    dispatch(getPreviewSoundKits());
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.Container>
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
                  onDownloadClick={makeOnActionClick(setIsDownloadOpen)}
                  onShareClick={makeOnActionClick(setIsShareOpen)}
                  onBuyClick={makeOnActionClick(setIsLecensesOpen)}
                />
              )}
            </S.FeaturedBeat>
          </S.IntroInner>
        </S.Container>
      </S.Intro>
      <S.Container>
        <S.BeatsList>
          {isFetching ? (
            <Preloader />
          ) : (
            <BeatsList
              onDownloadClick={makeOnActionClick(setIsDownloadOpen)}
              onShareClick={makeOnActionClick(setIsShareOpen)}
              onBuyClick={makeOnActionClick(setIsLecensesOpen)}
              beats={beats}
            />
          )}
        </S.BeatsList>
        <S.AllTracksLink>
          <ButtonLink to={RouterPaths.beats}>Browse all tracks</ButtonLink>
        </S.AllTracksLink>
      </S.Container>
      <S.Licenses>
        <S.Container>
          <S.LicensesTitle>Licensing Info</S.LicensesTitle>
          <S.LicensesList>
            {isLicensesFetching ? (
              <Preloader />
            ) : (
              <LicensesList licenses={licenses} />
            )}
          </S.LicensesList>
        </S.Container>
      </S.Licenses>
      <S.SoundKits>
        <S.Container>
          {isSoundKitsFetching ? (
            <Preloader />
          ) : (
            <SoundKitsList kits={soundKits} />
          )}
        </S.Container>
      </S.SoundKits>

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
      <LicensesModal
        isOpen={isLicensesOpen}
        setIsOpen={setIsLecensesOpen}
        beat={beat}
      />
    </S.Landing>
  );
};

export default Landing;

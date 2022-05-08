import { FC, memo, useCallback, useEffect, useState } from 'react';
import * as S from './Landing.style';
import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import DownloadModal from '../../components/DownloadModal/DownloadModal';
import ShareModal from '../../components/ShareModal/ShareModal';
import LicensesModal from '../../components/LicensesModal/LicensesModal';
import LicensesList from '../../components/LicensesList/LicensesList';
import SoundKitsList from '../../components/SoundKitsList/SoundKitsList';
import useActions from '../../hooks/useActions';
import CollabsList from '../../components/CollabsList/CollabsList';
import Visualizer from '../../components/Visualizer/Visualizer';
import ContactForm from '../../components/ContactForm/ContactForm';
import { useOutletContext } from 'react-router-dom';

const Landing: FC = memo(() => {
  const { beats, isFetching } = useTypedSelector(state => state.beats);
  const { featuredBeat, beat } = useTypedSelector(state => state.beat);
  const { licenses, isFetching: isLicensesFetching } = useTypedSelector(
    state => state.licenses,
  );
  const audioRef = useOutletContext();

  const {
    getBeat,
    getFeaturedBeat,
    getLicenses,
    getPreviewSoundKits,
    getPreviewBeats,
    getPreviewCollabs,
  } = useActions();

  const { soundKits, isFetching: isSoundKitsFetching } = useTypedSelector(
    state => state.soundKits,
  );

  const { collabs, isFetching: isCollabsFetching } = useTypedSelector(
    state => state.collabs,
  );

  const isFeaturedBeatFetching = !featuredBeat;

  const [isDownloadOpen, setIsDownloadOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const [isLicensesOpen, setIsLecensesOpen] = useState(false);

  const getContent = (id: number) => {
    getBeat(id);
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
    getFeaturedBeat();
    getPreviewBeats();
    getLicenses();
    getPreviewSoundKits();
    getPreviewCollabs();
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

            <Visualizer audioRef={audioRef.audioRef} />
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
          <S.SectionTitle>Licensing Info</S.SectionTitle>
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
          <S.SectionTitle>Sound Kits</S.SectionTitle>
          {isSoundKitsFetching ? (
            <Preloader />
          ) : (
            <SoundKitsList kits={soundKits} />
          )}
          <S.AllSoundKits>
            <ButtonLink to={`${RouterPaths.soundKits}`}>
              Browse all sound kits
            </ButtonLink>
          </S.AllSoundKits>
        </S.Container>
      </S.SoundKits>

      <S.Services>
        <S.Container>
          <S.SectionTitle>Services</S.SectionTitle>
          {isCollabsFetching ? (
            <Preloader />
          ) : (
            <CollabsList collabs={collabs} />
          )}
          <S.AllServices>
            <ButtonLink to={`${RouterPaths.collabs}`}>
              Browse all services
            </ButtonLink>
          </S.AllServices>
        </S.Container>
      </S.Services>
      <S.Contact>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.Container>
          <S.ContactForm>
            <ContactForm />
          </S.ContactForm>
        </S.Container>
      </S.Contact>

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
});

export default Landing;

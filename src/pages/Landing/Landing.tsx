import { FC, memo, useEffect } from 'react';
import * as S from './Landing.style';
import FeaturedBeat from '../../components/FeaturedBeat/FeaturedBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import Preloader from '../../components/Preloader/Preloader';
import BeatsList from '../../components/BeatsList/BeatsList';
import { ButtonLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import useActions from '../../hooks/useActions';
import Visualizer from '../../components/Visualizer/Visualizer';
import ContactForm from '../../components/ContactForm/ContactForm';
import CollabCard from '../../components/CollabCard/CollabCard';
import LicenseCard from '../../components/LicenseCard/LicenseCard';
import SoundKitCard from '../../components/SoundKitCard/SoundKitCard';
import DiscographyCard from '../../components/DiscographyCard/DiscographyCard';
import Button from '../../components/Button/Button';

const Landing: FC = memo(() => {
  const { beats, isFetching } = useTypedSelector(state => state.beats);
  const { beats: discographyBeats, isFetching: isDiscographyFetching } =
    useTypedSelector(state => state.discography);
  const { getDiscographyBeats } = useActions();
  const { featuredBeat } = useTypedSelector(state => state.beat);
  const { licenses, isFetching: isLicensesFetching } = useTypedSelector(
    state => state.licenses,
  );
  const { soundKits, isFetching: isSoundKitsFetching } = useTypedSelector(
    state => state.soundKits,
  );
  const { collabs, isFetching: isCollabsFetching } = useTypedSelector(
    state => state.collabs,
  );

  const isFeaturedBeatFetching = !featuredBeat;

  const {
    getFeaturedBeat,
    getLicenses,
    getPreviewSoundKits,
    getPreviewBeats,
    getPreviewCollabs,
  } = useActions();

  const collabsCards = collabs.map(collab => (
    <CollabCard collab={collab} key={collab.id} />
  ));

  const licensesCards = licenses.map(license => (
    <LicenseCard license={license} key={license.id} />
  ));

  const soundKitsCards = soundKits.map(soundKit => (
    <SoundKitCard soundKit={soundKit} key={soundKit.id} />
  ));

  const discographyCards = discographyBeats.map(beat => (
    <DiscographyCard beat={beat} key={beat.id} />
  ));

  useEffect(() => {
    if (!featuredBeat) {
      getFeaturedBeat();
    }
    getPreviewBeats();
    getLicenses();
    getPreviewSoundKits();
    getPreviewCollabs();
    getDiscographyBeats();
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.Container>
          <S.IntroInner>
            <S.IntroTitle>Someone beatstore</S.IntroTitle>
            <S.Search>
              <SearchField initialValues={{ query: '' }}>
                <S.SearchFieldContainer>
                  <S.SearchField
                    name="query"
                    placeholder={'What type of track are you looking for?'}
                  />
                  <S.SearchSubmit>
                    <Button type={'submit'}>Search</Button>
                  </S.SearchSubmit>
                </S.SearchFieldContainer>
              </SearchField>
            </S.Search>
            <S.FeaturedBeat>
              {isFeaturedBeatFetching ? (
                <Preloader />
              ) : (
                <FeaturedBeat beat={featuredBeat} />
              )}
            </S.FeaturedBeat>
          </S.IntroInner>
        </S.Container>
        <S.Visualizer>
          <Visualizer />
        </S.Visualizer>
      </S.Intro>
      <S.Container>
        <S.BeatsList>
          {isFetching ? <Preloader /> : <BeatsList beats={beats} />}
        </S.BeatsList>
        <S.AllTracksLink>
          <ButtonLink to={RouterPaths.beats}>Browse all tracks</ButtonLink>
        </S.AllTracksLink>
      </S.Container>
      <S.Licenses>
        <S.Container>
          <S.SectionTitle>Licensing Info</S.SectionTitle>
          <S.LicensesList>
            {isLicensesFetching ? <Preloader /> : licensesCards}
          </S.LicensesList>
        </S.Container>
      </S.Licenses>

      <S.SoundKits>
        <S.Container>
          <S.SectionTitle>Sound Kits</S.SectionTitle>
          <S.SoundKitsList>
            {isSoundKitsFetching ? <Preloader /> : soundKitsCards}
          </S.SoundKitsList>
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
          <S.CollabsList>
            {isCollabsFetching ? <Preloader /> : collabsCards}
          </S.CollabsList>
          <S.AllServices>
            <ButtonLink to={`${RouterPaths.collabs}`}>
              Browse all services
            </ButtonLink>
          </S.AllServices>
        </S.Container>
      </S.Services>
      <S.Discography>
        <S.Container>
          <S.SectionTitle>Discography</S.SectionTitle>
          <S.DiscographyList>
            {isDiscographyFetching ? <Preloader /> : discographyCards}
          </S.DiscographyList>
        </S.Container>
      </S.Discography>
      <S.Contact>
        <S.SectionTitle>Contact</S.SectionTitle>
        <S.Container>
          <S.ContactForm>
            <ContactForm />
          </S.ContactForm>
        </S.Container>
      </S.Contact>
    </S.Landing>
  );
});

export default Landing;

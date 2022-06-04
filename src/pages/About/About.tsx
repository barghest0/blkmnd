import { useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import Preloader from 'components/Preloader/Preloader';
import DiscographyCard from 'components/DiscographyCard/DiscographyCard';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useActions from 'hooks/useActions';

import * as S from './About.style';
import GalleryImage from './images/gallery-image.jpg';

import * as discographySelectors from 'reduxStore/discography/selectors';

const About = () => {
  const { getDiscographyBeats } = useActions();
  const discographyBeats = useTypedSelector(discographySelectors.allBeats);

  const isDiscographyFetching = useTypedSelector(
    discographySelectors.isFetching,
  );

  const gallery = [GalleryImage, GalleryImage, GalleryImage];

  useEffect(() => {
    getDiscographyBeats();
  }, []);

  const discographyCards = discographyBeats.map(beat => (
    <DiscographyCard beat={beat} key={beat.id} />
  ));

  const gallerySlides = gallery.map((image, index) => (
    <SwiperSlide key={index}>
      <S.GalleryImage src={image} />
    </SwiperSlide>
  ));

  return (
    <S.About>
      <S.Container>
        <S.Title>About</S.Title>

        <S.SectionTitle>Biography</S.SectionTitle>
        <S.Biography>
          <S.BiographyText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </S.BiographyText>
          <S.BiographyImage
            src={require('./images/biography-image.png')}
          ></S.BiographyImage>
        </S.Biography>

        <S.SectionTitle>Discography</S.SectionTitle>
        <S.Discography>
          <ScrollContainer vertical={false}>
            <S.DiscographyList>
              {isDiscographyFetching ? <Preloader /> : discographyCards}
            </S.DiscographyList>
          </ScrollContainer>
        </S.Discography>

        <S.SectionTitle>Gallery</S.SectionTitle>
        <S.Gallery>
          <Swiper spaceBetween={30} slidesPerView={2} loop>
            {gallerySlides}
          </Swiper>
        </S.Gallery>
      </S.Container>
    </S.About>
  );
};

export default About;

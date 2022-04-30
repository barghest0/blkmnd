import SearchField from '../../components/SearchField/SearchField';
import * as S from './Landing.style';

const Landing = () => {
  return (
    <S.Landing>
      <S.Intro>
        <S.IntroInner>
          <S.IntroTitle>Someone beatstore</S.IntroTitle>
          <S.IntroSearch>
            <SearchField hasButton={true} buttonText={'search'} />
          </S.IntroSearch>
        </S.IntroInner>
      </S.Intro>
    </S.Landing>
  );
};

export default Landing;

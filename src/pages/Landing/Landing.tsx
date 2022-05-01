import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import * as S from './Landing.style';

import PreviewBeat from '../../components/PreviewBeat/PreviewBeat';
import SearchField from '../../components/SearchField/SearchField';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import { getPreviewBeat } from '../../redux/beats/actions';

const Landing = () => {
  const { previewBeat, isFetching } = useTypedSelector(state => state.landing);
  const dispatch = useDispatch();
  const isBeatFetching = isFetching || !previewBeat;

  useEffect(() => {
    dispatch(getPreviewBeat(1));
  }, []);

  return (
    <S.Landing>
      <S.Intro>
        <S.IntroInner>
          <S.IntroTitle>Someone beatstore</S.IntroTitle>
          <S.Search>
            <SearchField hasButton buttonText={'search'} />
          </S.Search>
          <S.PreviewBeat>
            {isBeatFetching ? 'Preloader' : <PreviewBeat beat={previewBeat} />}
          </S.PreviewBeat>
        </S.IntroInner>
      </S.Intro>
    </S.Landing>
  );
};

export default Landing;

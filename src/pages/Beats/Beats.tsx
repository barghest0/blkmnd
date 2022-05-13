import { useEffect } from 'react';
import * as S from './Beats.style';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import BeatsList from '../../components/BeatsList/BeatsList';
import { FormControl } from '@mui/material';
import { useFormik } from 'formik';
import SearchField from '../../components/SearchField/SearchField';
import Preloader from '../../components/Preloader/Preloader';
import { useSearchParams } from 'react-router-dom';

type FilterValues = {
  genre: string;
  bpm: string;
  mood: string;
  type: string;
  sort: string;
};

const Beats = () => {
  const { getAllBeats, getFilteredBeats } = useActions();
  const { beats, isFetching } = useTypedSelector(state => state.beats);

  const [filters, setFilters] = useSearchParams();

  const filterQuery = filters.get('query');

  useEffect(() => {
    getAllBeats();
  }, []);

  useEffect(() => {
    if (filterQuery) {
      getFilteredBeats({ query: filterQuery });
    }
  }, [filters]);

  const initialFilterValues: FilterValues = {
    genre: 'All ganres',
    bpm: 'All BPM',
    mood: 'All moods',
    type: 'All types',
    sort: 'Default sort',
  };

  const onFilterSubmit = (values: FilterValues) => {
    console.log(values);
  };

  const filterFormik = useFormik({
    initialValues: initialFilterValues,
    onSubmit: onFilterSubmit,
  });

  return (
    <S.Beats>
      <S.Container>
        <S.Title>Beats</S.Title>
        <S.SearchContainer>
          <S.Filters>
            <FormControl>
              <S.FilterMenu
                value={filterFormik.values.type}
                onChange={filterFormik.handleChange}
                name="type"
                displayEmpty
                defaultValue={filterFormik.values.type}
              >
                <S.Option value={'All types'}>All types</S.Option>
                <S.Option value={'Beats'}>Beats</S.Option>
              </S.FilterMenu>
            </FormControl>
            <FormControl>
              <S.FilterMenu
                value={filterFormik.values.bpm}
                onChange={filterFormik.handleChange}
                name="bpm"
                displayEmpty
                defaultValue={filterFormik.values.bpm}
              >
                <S.Option value={'All BPM'}>All BPM</S.Option>
                <S.Option value={100}>100</S.Option>
                <S.Option value={120}>120</S.Option>
                <S.Option value={150}>150</S.Option>
              </S.FilterMenu>
            </FormControl>
            <FormControl>
              <S.FilterMenu
                value={filterFormik.values.mood}
                onChange={filterFormik.handleChange}
                name="mood"
                displayEmpty
                defaultValue={filterFormik.values.mood}
              >
                <S.Option value={'All moods'}>All moods</S.Option>
                <S.Option value={'Angry'}>Dark</S.Option>
                <S.Option value={'Dark'}>Angry</S.Option>
              </S.FilterMenu>
            </FormControl>
            <FormControl>
              <S.FilterMenu
                value={filterFormik.values.genre}
                onChange={filterFormik.handleChange}
                name="genre"
                displayEmpty
                defaultValue={filterFormik.values.genre}
              >
                <S.Option value={'All ganres'}>All Genres</S.Option>
                <S.Option value={'Hip Hop'}>Hip Hop</S.Option>
                <S.Option value={'Pop'}>Pop</S.Option>
              </S.FilterMenu>
            </FormControl>
            <FormControl>
              <S.FilterMenu
                value={filterFormik.values.sort}
                onChange={filterFormik.handleChange}
                name="sort"
                displayEmpty
                defaultValue={filterFormik.values.sort}
              >
                <S.Option value={'Default sort'}>Default sort</S.Option>
                <S.Option value={'Popular'}>Popular</S.Option>
                <S.Option value={'Most played'}>Most played</S.Option>
              </S.FilterMenu>
            </FormControl>
          </S.Filters>
          <SearchField initialValues={{ query: filterQuery ?? '' }}>
            <S.SearchField
              name="query"
              placeholder="What type of track are you looking for?"
            />
          </SearchField>
        </S.SearchContainer>
        <S.BeatsList>
          {isFetching ? <Preloader /> : <BeatsList beats={beats} />}
        </S.BeatsList>
      </S.Container>
    </S.Beats>
  );
};

export default Beats;

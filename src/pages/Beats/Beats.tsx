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
import FilterMenu from '../../components/FilterMenu/FilterMenu';

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
    genre: 'All genres',
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

  const typeOptions = [
    { value: 'All types', text: 'All types' },
    { value: 'Beats', text: 'Beats' },
  ];

  const bpmOptions = [
    { value: 'All BPM', text: 'All BPM' },
    { value: 100, text: 200 },
    { value: 150, text: 150 },
    { value: 200, text: 200 },
  ];

  const moodOptions = [
    { value: 'All moods', text: 'All moods' },
    { value: 'Angry', text: 'Angry' },
    { value: 'Dart', text: 'Dark' },
  ];

  const genreOptions = [
    { value: 'All genres', text: 'All genres' },
    { value: 'Hip Hop', text: 'Hip Hop' },
    { value: 'Pop', text: 'Pop' },
  ];

  const sortOptions = [
    { value: 'Default sort', text: 'Default sort' },
    { value: 'Popular', text: 'Popular' },
    { value: 'Most played', text: 'Most played' },
  ];

  return (
    <S.Beats>
      <S.Container>
        <S.Title>Beats</S.Title>
        <S.SearchContainer>
          <S.Filters>
            <FilterMenu
              value={filterFormik.values.type}
              onChange={filterFormik.handleChange}
              name="type"
              defaultValue={filterFormik.values.type}
              options={typeOptions}
            />
            <FilterMenu
              value={filterFormik.values.bpm}
              onChange={filterFormik.handleChange}
              name="bpm"
              defaultValue={filterFormik.values.bpm}
              options={bpmOptions}
            />
            <FilterMenu
              value={filterFormik.values.mood}
              onChange={filterFormik.handleChange}
              name="mood"
              defaultValue={filterFormik.values.mood}
              options={moodOptions}
            />
            <FilterMenu
              value={filterFormik.values.genre}
              onChange={filterFormik.handleChange}
              name="genre"
              defaultValue={filterFormik.values.genre}
              options={genreOptions}
            />
            <FilterMenu
              value={filterFormik.values.sort}
              onChange={filterFormik.handleChange}
              name="sort"
              defaultValue={filterFormik.values.sort}
              options={sortOptions}
            />
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

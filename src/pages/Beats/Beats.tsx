import { useEffect } from 'react';
import { SelectChangeEvent } from '@mui/material';
import { useFormik } from 'formik';

import BeatsList from 'components/BeatsList/BeatsList';
import Preloader from 'components/Preloader/Preloader';
import { useSearchParams } from 'react-router-dom';
import FilterMenu from 'components/FilterMenu/FilterMenu';
import useTypedSelector from 'hooks/redux/useTypedDispatch';
import useSearch from 'hooks/useSearch';
import useActions from 'hooks/useActions';
import { RouterPaths } from 'shared/router/types';
import * as beatsSelectors from 'reduxStore/beats/selectors';

import * as S from './Beats.style';

type FilterValues = {
  genre: string;
  bpm: string;
  mood: string;
  type: string;
  sort: string;
};

const Beats = () => {
  const { getAllBeats, getFilteredBeats } = useActions();
  const beats = useTypedSelector(beatsSelectors.allBeats);
  const isBeatsFetching = useTypedSelector(beatsSelectors.beatsFetching);

  const [filters, setFilters] = useSearchParams();

  const { searchValue, onSearchSubmit, searchFieldName, onSearchChange } =
    useSearch({
      initialValue: '',
      searchPath: RouterPaths.beats,
    });

  useEffect(() => {
    getAllBeats();
  }, []);

  useEffect(() => {
    getFilteredBeats({ search: searchValue });
  }, [searchValue]);

  const initialFilterValues: FilterValues = {
    genre: 'all',
    bpm: 'all',
    mood: 'all',
    type: 'all',
    sort: 'default',
  };

  const onFilterSubmit = (values: FilterValues) => {
    console.log(values);
  };

  const filterFormik = useFormik({
    initialValues: initialFilterValues,
    onSubmit: onFilterSubmit,
  });

  const onFilterChange = (event: SelectChangeEvent<unknown>) => {
    filterFormik.handleChange(event);
    const { name } = event.target;
    const value = event.target.value as string;
    filters.set(name, value);

    getFilteredBeats({ [name]: value, search: searchValue });

    setFilters(filters);
  };

  const typeOptions = [
    { value: 'all', text: 'All types' },
    { value: 'beats', text: 'Beats' },
  ];

  const bpmOptions = [
    { value: 'all', text: 'All BPM' },
    { value: 100, text: 100 },
    { value: 133, text: 133 },
    { value: 155, text: 155 },
    { value: 200, text: 200 },
  ];

  const moodOptions = [
    { value: 'all', text: 'All moods' },
    { value: 'angry', text: 'Angry' },
    { value: 'dark', text: 'Dark' },
  ];

  const genreOptions = [
    { value: 'all', text: 'All genres' },
    { value: 'hip_hop', text: 'Hip Hop' },
    { value: 'pop', text: 'Pop' },
  ];

  const sortOptions = [
    { value: 'default', text: 'Default sort' },
    { value: 'popular', text: 'Popular' },
    { value: 'most_played', text: 'Most played' },
  ];

  return (
    <S.Beats>
      <S.Container>
        <S.Title>Beats</S.Title>
        <S.SearchContainer>
          <S.Filters>
            <FilterMenu
              value={filterFormik.values.type}
              onChange={onFilterChange}
              name="type"
              defaultValue={filterFormik.values.type}
              options={typeOptions}
            />
            <FilterMenu
              value={filterFormik.values.bpm}
              onChange={onFilterChange}
              name="bpm"
              defaultValue={filterFormik.values.bpm}
              options={bpmOptions}
            />
            <FilterMenu
              value={filterFormik.values.mood}
              onChange={onFilterChange}
              name="mood"
              defaultValue={filterFormik.values.mood}
              options={moodOptions}
            />
            <FilterMenu
              value={filterFormik.values.genre}
              onChange={onFilterChange}
              name="genre"
              defaultValue={filterFormik.values.genre}
              options={genreOptions}
            />
            <FilterMenu
              value={filterFormik.values.sort}
              onChange={onFilterChange}
              name="sort"
              defaultValue={filterFormik.values.sort}
              options={sortOptions}
            />
          </S.Filters>
          <S.Search onSubmit={onSearchSubmit}>
            <S.SearchField
              name={searchFieldName}
              onChange={onSearchChange}
              value={searchValue}
              placeholder="What type of track are you looking for?"
            />
          </S.Search>
        </S.SearchContainer>
        <S.BeatsList>
          {isBeatsFetching ? <Preloader /> : <BeatsList beats={beats} />}
        </S.BeatsList>
      </S.Container>
    </S.Beats>
  );
};

export default Beats;

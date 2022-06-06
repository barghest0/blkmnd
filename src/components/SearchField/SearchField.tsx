import { cloneElement, FC, SyntheticEvent } from 'react';
import { useFormik } from 'formik';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { RouterPaths } from 'shared/router/types';
import useActions from 'hooks/useActions';

import * as S from './SearchField.styles';

type QueryInitialValues = {
  query: string;
};

type Props = {
  children: JSX.Element;
  initialValues: QueryInitialValues;
};

type Values = {
  query: string;
};

const SearchField: FC<Props> = ({ children, initialValues }) => {
  const navigate = useNavigate();

  const { getFilteredBeats } = useActions();
  const [search, setSearch] = useSearchParams();

  const onSearchSubmit = ({ query }: Values) => {
    if (query) {
      navigate(`${RouterPaths.beats}/`);
      search.set('query', query);
      setSearch(search);
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit: onSearchSubmit,
  });

  const onSearchChange = (event: SyntheticEvent<HTMLInputElement>) => {
    formik.handleChange(event);
    const query = event.currentTarget.value;

    getFilteredBeats({ query });
  };

  return (
    <S.SearchField onSubmit={formik.handleSubmit}>
      {cloneElement(children, {
        value: formik.values.query,
        onChange: onSearchChange,
      })}
    </S.SearchField>
  );
};

export default SearchField;

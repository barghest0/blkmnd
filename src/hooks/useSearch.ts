import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { RouterPaths } from 'shared/router/types';

type SearchValues = {
  search: string;
};

type Props = {
  initialValue: string;
};

const useSearch = ({ initialValue }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchKey = 'search';

  const onSearchSubmit = ({ search }: SearchValues) => {
    if (search) {
      navigate(`${RouterPaths.beats}`);
      searchParams.set(searchKey, search);
      setSearchParams(searchParams);
    }
  };

  const { values, handleSubmit, handleChange } = useFormik({
    initialValues: {
      search: searchParams.get(searchKey) ?? initialValue,
    },
    onSubmit: onSearchSubmit,
  });

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>) => {
    const field = event.target;
    searchParams.set(searchKey, field.value);
    setSearchParams(searchParams);

    handleChange(event);
  };

  return {
    searchValue: values.search,
    onSearchSubmit: handleSubmit,
    onSearchChange,
    searchFieldName: searchKey,
  };
};

export default useSearch;

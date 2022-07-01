import { useFormik } from 'formik';
import { ChangeEvent } from 'react';
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from 'react-router-dom';

import { RouterPaths } from 'shared/router/types';

type SearchValues = {
  search: string;
};

type Props = {
  initialValue: string;
  searchPath: RouterPaths;
};

const useSearch = ({ initialValue, searchPath }: Props) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const searchKey = 'search';
  const urlSearch = searchParams.get(searchKey);

  const onSearchSubmit = ({ search }: SearchValues) => {
    if (search) {
      searchParams.set(searchKey, search);
      setSearchParams(searchParams);
      navigate({
        pathname: searchPath,
        search: createSearchParams({ search }).toString(),
      });
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
    searchValue: urlSearch ?? values.search,
    onSearchSubmit: handleSubmit,
    onSearchChange,
    searchFieldName: searchKey,
  };
};

export default useSearch;

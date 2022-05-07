import { FC } from 'react';
import { useFormik } from 'formik';
import Button from '../Button/Button';
import * as S from './SearchField.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '../../shared/router/types';

type Props = {
  hasButton: boolean;
  buttonText: string;
};

type Values = {
  query: string;
};

const SearchField: FC<Partial<Props>> = ({
  hasButton = false,
  buttonText = '',
}) => {
  const navigate = useNavigate();
  const initialSearchValue: Values = {
    query: '',
  };

  const onSearchSubmit = ({ query }: Values) => {
    if (query) {
      navigate(`${RouterPaths.beats}?q=${query}`);
    }
  };

  const formik = useFormik({
    initialValues: initialSearchValue,
    onSubmit: onSearchSubmit,
  });

  return (
    <S.SearchField onSubmit={formik.handleSubmit}>
      <S.SearchInput
        name="query"
        onChange={formik.handleChange}
        placeholder={'What type of track are you looking for?'}
      />
      <S.SearchButton>
        {hasButton && <Button type={'submit'}>{buttonText}</Button>}
      </S.SearchButton>
    </S.SearchField>
  );
};

export default SearchField;

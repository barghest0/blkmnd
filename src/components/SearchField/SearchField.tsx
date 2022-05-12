import { cloneElement, FC } from 'react';
import { useFormik } from 'formik';
import * as S from './SearchField.styles';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '../../shared/router/types';

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

  const onSearchSubmit = ({ query }: Values) => {
    if (query) {
      navigate(`${RouterPaths.beats}?q=${query}`);
    }
  };

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: onSearchSubmit,
  });

  return (
    <S.SearchField onSubmit={formik.handleSubmit}>
      {cloneElement(children, {
        onChange: formik.handleChange,
      })}
    </S.SearchField>
  );
};

export default SearchField;

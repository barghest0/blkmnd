import { FC, SyntheticEvent } from 'react';
import * as S from './HeaderSearch.style';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';
import { RouterPaths } from '../../shared/router/types';
import { useFormik } from 'formik';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type SearchInputProps = {
  isOpen: boolean;
};

type Values = {
  query: string;
};

const HeaderSearch: FC<Props> = ({ isOpen, setIsOpen }) => {
  const onSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  const onCloseButtonClick = () => {
    setIsOpen(false);
  };

  const navigate = useNavigate();
  const initialSearchValues: Values = {
    query: '',
  };

  const onSearchSubmit = ({ query }: Values) => {
    if (query) {
      navigate(`${RouterPaths.beats}/?query=${query}`);
    }
  };

  const formik = useFormik({
    initialValues: initialSearchValues,
    onSubmit: onSearchSubmit,
  });

  return (
    <S.HeaderSearch onSubmit={formik.handleSubmit}>
      <S.SearchIcon onClick={onSearchIconClick}>
        <SearchIcon />
      </S.SearchIcon>
      <S.SearchField>
        <S.SearchInput
          onChange={formik.handleChange}
          isOpen={isOpen}
          name="query"
          placeholder={'Search beats'}
        />
        <S.CloseButton isOpen={isOpen} onClick={onCloseButtonClick}>
          <CloseIcon />
        </S.CloseButton>
      </S.SearchField>
    </S.HeaderSearch>
  );
};

export { SearchInputProps };
export default HeaderSearch;

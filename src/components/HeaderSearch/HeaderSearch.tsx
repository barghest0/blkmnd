import { FC } from 'react';
import * as S from './HeaderSearch.style';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import SearchField from '../SearchField/SearchField';
import { useSearchParams } from 'react-router-dom';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type SearchInputProps = {
  isOpen: boolean;
};

const HeaderSearch: FC<Props> = ({ isOpen, setIsOpen }) => {
  const onSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  const [query] = useSearchParams();

  const onCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <S.HeaderSearch>
      <S.SearchIcon onClick={onSearchIconClick}>
        <SearchIcon />
      </S.SearchIcon>
      <SearchField initialValues={{ query: query.get('q') }}>
        <S.SearchFieldContainer>
          <S.SearchInput
            isOpen={isOpen}
            name="query"
            placeholder={'Search beats'}
          />
          <S.CloseButton isOpen={isOpen} onClick={onCloseButtonClick}>
            <CloseIcon />
          </S.CloseButton>
        </S.SearchFieldContainer>
      </SearchField>
    </S.HeaderSearch>
  );
};

export { SearchInputProps };
export default HeaderSearch;

import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import SearchField from 'components/SearchField/SearchField';

import * as S from './HeaderSearch.style';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

type SearchProps = {
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
      <S.SearchIcon isOpen={isOpen} onClick={onSearchIconClick}>
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

export { SearchProps };
export default HeaderSearch;

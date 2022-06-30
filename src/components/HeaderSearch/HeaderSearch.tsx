import { FC } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

import useSearch from 'hooks/useSearch';

import * as S from './HeaderSearch.style';

type Props = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const HeaderSearch: FC<Props> = ({ isOpen, setIsOpen }) => {
  const onSearchIconClick = () => {
    setIsOpen(!isOpen);
  };

  const { searchValue, onSearchSubmit, searchFieldName, onSearchChange } =
    useSearch({
      initialValue: '',
    });

  const onCloseButtonClick = () => {
    setIsOpen(false);
  };

  return (
    <S.HeaderSearch>
      <S.SearchIcon isOpen={isOpen} onClick={onSearchIconClick}>
        <SearchIcon />
      </S.SearchIcon>
      <S.SearchFieldContainer onSubmit={onSearchSubmit}>
        <S.SearchInput
          isOpen={isOpen}
          name={searchFieldName}
          onChange={onSearchChange}
          value={searchValue}
          placeholder="Search beats"
        />
        <S.CloseButton isOpen={isOpen} onClick={onCloseButtonClick}>
          <CloseIcon />
        </S.CloseButton>
      </S.SearchFieldContainer>
    </S.HeaderSearch>
  );
};

export default HeaderSearch;

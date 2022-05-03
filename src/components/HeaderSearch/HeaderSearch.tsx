import { FC, SyntheticEvent } from 'react';
import * as S from './HeaderSearch.style';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';

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

  const onCloseButtonClick = () => {
    setIsOpen(false);
  };

  const onSearchSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
  };

  return (
    <S.HeaderSearch onSubmit={onSearchSubmit}>
      <S.SearchIcon onClick={onSearchIconClick}>
        <SearchIcon />
      </S.SearchIcon>
      <S.SearchField>
        <S.SearchInput isOpen={isOpen} placeholder={'Search beats'} />
        <S.CloseButton isOpen={isOpen} onClick={onCloseButtonClick}>
          <CloseIcon />
        </S.CloseButton>
      </S.SearchField>
    </S.HeaderSearch>
  );
};

export { SearchInputProps };
export default HeaderSearch;

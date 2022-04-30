import { FC } from 'react';
import Button from '../Button/Button';
import * as S from './SearchField.styles';

type Props = {
  hasButton: boolean;
  buttonText: string;
};

const SearchField: FC<Partial<Props>> = ({
  hasButton = false,
  buttonText = '',
}) => {
  return (
    <S.SearchField>
      <S.SearchInput placeholder={'What type of track are you looking for?'} />
      <S.SearchButton>
        {hasButton && <Button>{buttonText}</Button>}
      </S.SearchButton>
    </S.SearchField>
  );
};

export default SearchField;

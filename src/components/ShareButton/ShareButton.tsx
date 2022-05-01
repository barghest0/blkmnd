import Button from '../Button/Button';
import { ButtonThemes } from '../Button/types';
import * as S from './ShareButton.style';
const ShareButton = () => {
  return (
    <Button theme={ButtonThemes.dark}>
      <S.ShareIcon />
    </Button>
  );
};

export default ShareButton;

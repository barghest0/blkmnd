import Button from '../Button/Button';
import {ButtonThemes} from '../Button/types';
import * as S from './DownloadButton.style';

const DownloadButton = () => {
  return (
    <Button theme={ButtonThemes.dark}>
      <S.DownloadIcon />
    </Button>
  );
};

export default DownloadButton;

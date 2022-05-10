import { FC } from 'react';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';
import Button from '../Button/Button';
import { ButtonThemes } from '../Button/types';
import * as S from './DownloadButton.style';

type Props = {
  beatId: number;
};

const DownloadButton: FC<Props> = ({ beatId }) => {
  const { setModalVisability, getModalBeat } = useActions();

  const onDownloadButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.download });
    getModalBeat(beatId);
  };

  return (
    <S.DownloadButton onClick={onDownloadButtonClick}>
      <Button theme={ButtonThemes.dark}>
        <S.DownloadIcon />
      </Button>
    </S.DownloadButton>
  );
};

export default DownloadButton;

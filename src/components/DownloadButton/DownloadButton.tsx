import { FC } from 'react';

import Button from 'components/Button/Button';
import { ButtonThemes } from 'components/Button/types';
import useActions from 'hooks/useActions';
import { ModalsTypes } from 'reduxStore/modals/types';

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

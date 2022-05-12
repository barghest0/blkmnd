import { ShareOutlined } from '@mui/icons-material';
import { FC } from 'react';

import * as S from './ShareButton.style';

import Button from '../Button/Button';
import { ButtonThemes } from '../Button/types';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';

type Props = {
  hasBackground?: boolean;
  color?: string;
  beatId: number;
};

const ShareButton: FC<Props> = ({
  hasBackground = true,
  color = '',
  beatId,
}) => {
  const { setModalVisability, getModalBeat } = useActions();

  const onShareButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.share });
    getModalBeat(beatId);
  };
  return (
    <S.ShareButton onClick={onShareButtonClick}>
      <Button theme={ButtonThemes.dark} hasBackground={hasBackground}>
        <ShareOutlined sx={{ color }} />
      </Button>
    </S.ShareButton>
  );
};

export { Props };
export default ShareButton;

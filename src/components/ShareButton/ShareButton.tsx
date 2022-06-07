import { FC, ReactNode } from 'react';
import { ShareOutlined } from '@mui/icons-material';

import Button from 'components/Button/Button';
import { ButtonThemes } from 'components/Button/types';
import useActions from 'hooks/useActions';
import { ModalsTypes } from 'reduxStore/modals/types';
import { CartProductDetails } from 'reduxStore/cart/types';

import * as S from './ShareButton.style';

type Props = {
  hasBackground?: boolean;
  color?: string;
  product: CartProductDetails;
  children?: React.ReactNode | null;
};

const ShareButton: FC<Props> = ({
  hasBackground,
  color,
  product,
  children,
}) => {
  const { setModalVisability, getBeat } = useActions();

  const onShareButtonClick = () => {
    setModalVisability({ visability: true, modalType: ModalsTypes.share });
    getBeat(product.id);
  };
  return (
    <S.ShareButton onClick={onShareButtonClick}>
      <Button theme={ButtonThemes.dark} hasBackground={hasBackground}>
        <ShareOutlined sx={{ color, marginRight: children ? 1 : 0 }} />
        {children}
      </Button>
    </S.ShareButton>
  );
};

ShareButton.defaultProps = {
  hasBackground: true,
  color: '',
  children: null,
};

export default ShareButton;

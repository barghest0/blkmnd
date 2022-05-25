import { ShareOutlined } from '@mui/icons-material';
import { FC, ReactNode } from 'react';

import * as S from './ShareButton.style';

import Button from '../Button/Button';
import { ButtonThemes } from '../Button/types';
import useActions from '../../hooks/useActions';
import { ModalsTypes } from '../../redux/modals/types';
import { CartProductDetails } from '../../redux/cart/types';

type Props = {
  hasBackground?: boolean;
  color?: string;
  product: CartProductDetails;
  children?: ReactNode;
};

const ShareButton: FC<Props> = ({
  hasBackground = true,
  color = '',
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

export { Props };
export default ShareButton;

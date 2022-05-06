import { ShareOutlined } from '@mui/icons-material';
import { FC } from 'react';
import Button from '../Button/Button';
import { ButtonThemes } from '../Button/types';

type Props = {
  hasBackground?: boolean;
  color?: string;
};

const ShareButton: FC<Props> = ({ hasBackground = true, color = '' }) => {
  return (
    <Button theme={ButtonThemes.dark} hasBackground={hasBackground}>
      <ShareOutlined sx={{ color }} />
    </Button>
  );
};

export { Props };
export default ShareButton;

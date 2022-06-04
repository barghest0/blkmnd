import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';

import ThemeColors from './theme';

const StyledToastContainer = styled(ToastContainer)`
  .Toastify {
    &__toast {
      background-color: ${ThemeColors.layoutColor};
      color: ${ThemeColors.secondColor};
    }
    &__close-button {
      color: ${ThemeColors.secondColor};
    }
  }
`;

const ToastTextRow = styled.p``;

const ToastTextContainer = styled.div``;

export { StyledToastContainer, ToastTextRow, ToastTextContainer };

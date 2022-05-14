import { FC } from 'react';

import * as S from './DownloadModal.style';

import Modal from '../Modal/Modal';
import Preloader from '../Preloader/Preloader';
import { ModalsTypes } from '../../redux/modals/types';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import ModalContainer from '../ModalContainer/ModalContainer';
import { useFormik } from 'formik';
import { FormControl, Checkbox, FormControlLabel } from '@mui/material';
import Button from '../Button/Button';

type DownloadModalProps = {
  background?: string;
};

type DownloadValues = {
  email: string;
  name: string;
  mobilePrefix: string;
  mobilePhone: number;
  agree: boolean;
};

const DownloadModal: FC = () => {
  const { isDownloadOpen, beat } = useTypedSelector(state => state.modals);

  const initialDownloadValues: DownloadValues = {
    email: '',
    name: '',
    mobilePrefix: '+7',
    mobilePhone: 0,
    agree: false,
  };

  const onDownloadSubmit = (values: DownloadValues) => {
    console.log(values);
  };

  const formik = useFormik({
    initialValues: initialDownloadValues,
    onSubmit: onDownloadSubmit,
  });

  return (
    <S.DownloadModal>
      <ModalContainer isOpen={isDownloadOpen} modalType={ModalsTypes.download}>
        <S.Modal background={beat?.image}>
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={isDownloadOpen}
              title={`Download: ${beat.title}`}
              modalType={ModalsTypes.download}
            >
              <S.Content>
                <S.Tip>
                  We will send your free track to the email address you provide
                  below. Thanks!
                </S.Tip>
                <S.Form onSubmit={formik.handleSubmit}>
                  <S.Field
                    name="email"
                    type="email"
                    onChange={formik.handleChange}
                    variant="outlined"
                    label="Email"
                  />
                  <S.Field
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    variant="outlined"
                    label="Name"
                  />
                  <S.PhoneFields>
                    <FormControl>
                      <S.PhonePrefix
                        value={formik.values.mobilePrefix}
                        onChange={formik.handleChange}
                        name="mobilePrefix"
                      >
                        <S.Prefix value={'+7'}>+7 RU</S.Prefix>
                      </S.PhonePrefix>
                    </FormControl>

                    <S.Field
                      name="mobilePhone"
                      type="number"
                      onChange={formik.handleChange}
                      variant="outlined"
                      label="Phone number"
                    />
                  </S.PhoneFields>
                  <FormControlLabel
                    control={
                      <Checkbox onChange={formik.handleChange} name="agree" />
                    }
                    label="Yes, I would like to receive free tracks to the email address provided above."
                  />
                  <S.Submit>
                    <Button type={'submit'}>Send beat to your e-mail</Button>
                  </S.Submit>
                </S.Form>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.DownloadModal>
  );
};
export { DownloadModalProps };
export default DownloadModal;

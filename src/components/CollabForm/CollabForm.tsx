import { TextField } from '@mui/material';
import ruLocale from 'date-fns/locale/ru';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
} from '@mui/x-date-pickers';

import { useFormik } from 'formik';
import { memo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';

import { Beat } from '../../redux/beats/types';
import Button from '../Button/Button';

import * as S from './CollabForm.style';

const CollabForm = memo(() => {
  const { id } = useParams();
  const { getCollab } = useActions();
  const { collab } = useTypedSelector(state => state.collabs);

  const initialValues = {
    title: '',
  };

  const onCreateSubmit = (values: Beat) => {
    console.log(values);
  };

  const formik = useFormik({
    onSubmit: onCreateSubmit,
    initialValues,
  });

  useEffect(() => {
    if (id) {
      getCollab(Number(id));
    }
    if (collab) {
      formik.setValues(collab);
    }
  }, [collab?.id]);

  return (
    <S.CollabForm onSubmit={formik.handleSubmit}>
      <TextField
        label="title"
        name="title"
        variant="standard"
        value={formik.values.title || formik.initialValues.title}
        onChange={formik.handleChange}
      />

      <S.Submit>
        <Button type="submit">Create</Button>
      </S.Submit>
    </S.CollabForm>
  );
});

export default CollabForm;

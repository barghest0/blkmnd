import { TextField } from '@mui/material';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers';

import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';

import { Beat } from '../../redux/beats/types';
import Button from '../Button/Button';

import * as S from './BeatForm.style';

const BeatForm = () => {
  const { id } = useParams();
  const { getBeat } = useActions();
  const { beat } = useTypedSelector(state => state.beats);

  const initialValues = {
    title: '',
    bpm: 0,
    date: '',
    time: '',
    chord: '',
    price: 0,
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
      getBeat(Number(id));
      formik.setValues(beat);
    }
  }, [beat?.id]);

  return (
    <S.BeatForm onSubmit={formik.handleSubmit}>
      <TextField
        label="title"
        name="title"
        variant="standard"
        value={formik.values ? formik.values.title : formik.initialValues.title}
        onChange={formik.handleChange}
      />
      <TextField
        label="BPM"
        name="bpm"
        type="number"
        variant="standard"
        value={formik.values ? formik.values.bpm : formik.initialValues.bpm}
        onChange={formik.handleChange}
      />
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <DatePicker
          label="Basic example"
          value={formik.values ? formik.values.date : formik.initialValues.date}
          onChange={formik.handleChange}
          renderInput={params => (
            <TextField
              {...params}
              name="date"
              variant="standard"
              value={
                formik.values ? formik.values.date : formik.initialValues.date
              }
            />
          )}
        />
      </LocalizationProvider>
      <TextField
        label="Time"
        name="time"
        variant="standard"
        onChange={formik.handleChange}
      />
      <TextField
        label="Price"
        name="price"
        type="number"
        variant="standard"
        onChange={formik.handleChange}
      />
      <S.Submit>
        <Button type="submit">Create</Button>
      </S.Submit>
    </S.BeatForm>
  );
};

export default BeatForm;

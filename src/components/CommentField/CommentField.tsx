import { TextField } from '@mui/material';
import { FormikHelpers, useFormik } from 'formik';
import { FC, SyntheticEvent } from 'react';
import commentValidation from '../../shared/formValidations/comment';
import Button from '../Button/Button';
import * as S from './CommentField.style';

type CommentValues = {
  comment: string;
};

type Props = {
  onSubmit: (values: CommentValues) => void;
};

const CommentField: FC<Props> = ({ onSubmit }) => {
  const initialValues = {
    comment: '',
  };

  const onCommentSubmit = (
    values: CommentValues,
    formikHelpers: FormikHelpers<CommentValues>,
  ) => {
    formikHelpers.resetForm();
    onSubmit(values);
  };

  const formik = useFormik({
    initialValues,
    validationSchema: commentValidation,
    onSubmit: onCommentSubmit,
  });

  return (
    <S.CommentField onSubmit={formik.handleSubmit}>
      <S.Avatar alt={'avatar'} />
      <S.TextField>
      <TextField
        name="comment"
        placeholder="Write a comment..."
        onChange={formik.handleChange}
        value={formik.values.comment}
        error={formik.touched.comment && Boolean(formik.errors.comment)}
        helperText={formik.touched.comment && formik.errors.comment}
        variant="standard"
      />

      </S.TextField>
      <S.Submit>
        <Button type="submit">send</Button>
      </S.Submit>
    </S.CommentField>
  );
};

export { CommentValues };
export default CommentField;

import { FC } from 'react';

import { Comment as CommentType } from 'reduxStore/beats/types';

import * as S from './Comment.style';

type Props = {
  comment: CommentType;
};

const Comment: FC<Props> = ({ comment }) => {
  const { text, date } = comment;
  const { username } = comment.user;
  return (
    <S.Comment>
      <S.Avatar />
      <S.Info>
        <S.Username>{username}</S.Username> • <S.Date>{date}</S.Date>
      </S.Info>
      <S.Content>{text}</S.Content>
    </S.Comment>
  );
};

export default Comment;

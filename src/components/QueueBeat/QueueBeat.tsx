import { FC, SyntheticEvent } from 'react';

import ChooseLicenseButton from 'components/ChooseLicenseButton/ChooseLicenseButton';
import ShareButton from 'components/ShareButton/ShareButton';
import TagLink from 'components/TagLink/TagLink';
import { Beat } from 'reduxStore/beats/types';
import ThemeColors from 'shared/styles/theme';

import * as S from './QueueBeat.style';

type Props = {
  beat: Beat;
};

const QueueBeat: FC<Props> = ({ beat }) => {
  const { title, tags, price, bpm, image, time } = beat;
  const onActionClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };
  const tagsLinks = tags.map((tag) => (
    <S.Tag onClick={onActionClick} key={tag.id}>
      <TagLink tag={tag} />
    </S.Tag>
  ));

  return (
    <S.QueueBeat>
      <S.Thumbnail src={image} />
      <S.Title>{title}</S.Title>
      <S.Time>{time}</S.Time>
      <S.Bpm>{bpm}</S.Bpm>
      <S.Tags>{tagsLinks}</S.Tags>
      <S.Actions onClick={onActionClick}>
        <ShareButton
          hasBackground={false}
          color={ThemeColors.white}
          product={beat}
        />
        <ChooseLicenseButton price={price} beat={beat} />
      </S.Actions>
    </S.QueueBeat>
  );
};

export default QueueBeat;

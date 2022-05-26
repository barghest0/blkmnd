import { FC } from 'react';

import * as S from './BeatsList.style';
import { Beat } from '../../redux/beats/types';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import BeatsListRow from '../BeatsListRow/BeatsListRow';

type Props = {
  beats: Beat[];
};

const BeatsList: FC<Props> = ({ beats }) => {
  const { beat: playerBeat } = useTypedSelector(state => state.player);

  const beatsRows = beats.map(beat => (
    <BeatsListRow
      key={beat.id}
      beat={beat}
      isActive={beat.id === playerBeat?.id}
    />
  ));

  return (
    <S.BeatsList>
      <S.ListHead>
        <S.HeadColumn></S.HeadColumn>
        <S.HeadColumn>Title</S.HeadColumn>
        <S.HeadColumn>Time</S.HeadColumn>
        <S.HeadColumn>Bpm</S.HeadColumn>
        <S.HeadColumn>Tags</S.HeadColumn>
      </S.ListHead>
      {beatsRows}
    </S.BeatsList>
  );
};

export default BeatsList;

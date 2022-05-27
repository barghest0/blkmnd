import { FC, SyntheticEvent } from 'react';
import useTypedSelector from '../../hooks/redux/useTypedDispatch';
import useActions from '../../hooks/useActions';
import useAudio from '../../hooks/useAudio';
import { Beat } from '../../redux/beats/types';
import { RouterPaths } from '../../shared/router/types';
import { StyledLink } from '../../shared/styles/links';
import ChooseLicenseButton from '../ChooseLicenseButton/ChooseLicenseButton';
import DownloadButton from '../DownloadButton/DownloadButton';
import Image from '../Image/Image';
import ShareButton from '../ShareButton/ShareButton';
import TagLink from '../TagLink/TagLink';
import * as S from './BeatsListRow.style';

type Props = {
  isActive: boolean;
  beat: Beat;
};

type RowProps = {
  isActive: boolean;
};

const BeatsListRow: FC<Props> = ({ isActive, beat }) => {
  const { image, id, title, time, bpm, tags, price } = beat;

  const { openPlayer } = useActions();

  const { beat: playerBeat } = useTypedSelector(state => state.player);

  const { setPlayerBeat, toggleAudioPlaying } = useAudio();

  const onBeatRowClick = () => {
    openPlayer();
    setPlayerBeat(beat);
    toggleAudioPlaying(playerBeat);
  };

  const onActionButtonClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const onLinkClick = (event: SyntheticEvent) => {
    event.stopPropagation();
  };

  const tagsLinks = tags.map(tag => (
    <S.Tag key={tag.id}>
      <TagLink tag={tag} />
    </S.Tag>
  ));

  return (
    <S.BeatsListRow isActive={isActive} onClick={onBeatRowClick}>
      <S.Thumbnail>
        <Image image={image} />
      </S.Thumbnail>
      <S.Title onClick={onLinkClick}>
        <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
      </S.Title>
      <S.Time>{time}</S.Time>
      <S.Bpm>{bpm}</S.Bpm>
      <S.Tags onClick={onLinkClick}>{tagsLinks}</S.Tags>
      <S.Actions>
        <S.Download onClick={onActionButtonClick}>
          <DownloadButton beatId={id} />
        </S.Download>
        <S.Share onClick={onActionButtonClick}>
          <ShareButton product={beat} />
        </S.Share>
        <S.Buy onClick={onActionButtonClick}>
          <ChooseLicenseButton price={price} beat={beat} />
        </S.Buy>
      </S.Actions>
    </S.BeatsListRow>
  );
};

export { RowProps };
export default BeatsListRow;

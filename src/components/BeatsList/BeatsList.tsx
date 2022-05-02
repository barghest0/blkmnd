import * as S from './BeatsList.style';
import { FC } from 'react';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import TagLink from '../TagLink/TagLink';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import AddToCardButton from '../AddToCardButton/AddToCardButton';
import { Beat } from '../../redux/beat/types';

type Props = {
  beats: Beat[];
  onDownloadClick: (id: number) => void;
  onShareClick: (id: number) => void;
  onBuyClick: (id: number) => void;
};

const BeatsList: FC<Props> = ({
  beats,
  onDownloadClick,
  onShareClick,
  onBuyClick,
}) => {
  const beatsRows = beats.map(
    ({ image, id, title, time, bpm, tags, price }) => {
      const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

      return (
        <S.Row key={id}>
          <S.Column>
            <S.Thumbnail src={image} width={50} height={50} />
          </S.Column>
          <S.Column>
            <StyledLink to={`${RouterPaths.beats}/${id}`}>{title}</StyledLink>
          </S.Column>
          <S.Column>{time}</S.Column>
          <S.Column>{bpm}</S.Column>
          <S.Column>
            <S.Tags>{tagsLinks}</S.Tags>
          </S.Column>
          <S.Column>
            <S.Actions>
              <S.Action onClick={() => onDownloadClick(id)}>
                <DownloadButton />
              </S.Action>
              <S.Action onClick={() => onShareClick(id)}>
                <ShareButton />
              </S.Action>
              <S.Action onClick={() => onBuyClick(id)}>
                <AddToCardButton price={price} />
              </S.Action>
            </S.Actions>
          </S.Column>
        </S.Row>
      );
    },
  );

  return (
    <S.BeatsList>
      <S.Row>
        <S.HeadColumn></S.HeadColumn>
        <S.HeadColumn>Title</S.HeadColumn>
        <S.HeadColumn>Time</S.HeadColumn>
        <S.HeadColumn>Bpm</S.HeadColumn>
        <S.HeadColumn>Tags</S.HeadColumn>
      </S.Row>
      {beatsRows}
    </S.BeatsList>
  );
};

export default BeatsList;

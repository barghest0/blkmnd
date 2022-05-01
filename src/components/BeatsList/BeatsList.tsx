import * as S from './BeatsList.style';
import { Beat } from '../../redux/beats/types';
import { FC } from 'react';
import { StyledLink } from '../../shared/styles/links';
import { RouterPaths } from '../../shared/router/types';
import TagLink from '../TagLink/TagLink';
import DownloadButton from '../DownloadButton/DownloadButton';
import ShareButton from '../ShareButton/ShareButton';
import AddToCardButton from '../AddToCardButton/AddToCardButton';

type Props = {
  beats: Beat[];
};

const BeatsList: FC<Props> = ({ beats }) => {
  const beatsRows = beats.map(
    ({ image, id, title, time, bpm, tags, price }) => {
      const tagsLinks = tags.map(tag => <TagLink tag={tag} key={tag.id} />);

      return (
        <S.Row>
          <S.Column>
            <S.ThumbnailContainer>
              <S.Thumbnail src={require(`./images/${image}`)} />
            </S.ThumbnailContainer>
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
            <DownloadButton />
            <ShareButton />
            <AddToCardButton price={price} />
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

import { FC } from 'react';

import { Tag } from 'reduxStore/beats/types';
import { RouterPaths } from 'shared/router/types';
import { StyledLink } from 'shared/styles/links';

import * as S from './TagLink.style';

type Props = {
  tag: Tag;
};

const TagLink: FC<Props> = ({ tag }) => {
  const { name } = tag;

  return (
    <S.TagLink>
      <S.Link>
        <StyledLink to={`${RouterPaths.beats}?tag=${tag.name}`}>
          #
          {name}
        </StyledLink>
      </S.Link>
    </S.TagLink>
  );
};

export default TagLink;

import { FC, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

import BuyButton from 'components/BuyButton/BuyButton';
import { License, Beat } from 'reduxStore/beats/types';

import * as S from './ChooseLicenseCard.style';

type Props = {
  license: License;
  beat: Beat;
};

const ChooseLicenseCard: FC<Props> = ({ license, beat }) => {
  const fileTypes = license.fileTypes.map(type => (
    <S.FileType key={type.id}>{type.name}</S.FileType>
  ));

  const [isOpen, setIsOpen] = useState(false);

  const { name, price } = license;

  const onAccordionLabelClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.ChooseLicenseCard>
      <S.Info>
        <S.License>
          <S.Title>{name}</S.Title>
          <S.FileTypes>{fileTypes}</S.FileTypes>
        </S.License>
        <S.Buy>
          <BuyButton price={price} details={beat} license={license} />
        </S.Buy>
      </S.Info>
      <Accordion expanded={isOpen} onChange={onAccordionLabelClick}>
        <AccordionSummary expandIcon={<ArrowForwardIosSharpIcon />}>
          {!isOpen ? 'Show usage terms' : 'Hide usage terms'}
        </AccordionSummary>
        <AccordionDetails>
          <S.Terms>terms</S.Terms>
        </AccordionDetails>
      </Accordion>
    </S.ChooseLicenseCard>
  );
};

export default ChooseLicenseCard;

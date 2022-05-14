import { Accordion, AccordionDetails, AccordionSummary } from '@mui/material';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import { FC, useState } from 'react';
import { License } from '../../redux/beats/types';
import Button from '../Button/Button';
import * as S from './ChooseLicenseCard.style';

type Props = {
  license: License;
};

const ChooseLicenseCard: FC<Props> = ({ license }) => {
  const fileTypes = license.fileTypes.map(type => (
    <S.FileType key={type.id}>{type.name}</S.FileType>
  ));
  const [isOpen, setIsOpen] = useState(false);

  const { name, price } = license;

  const onBuyButtonClick = () => {
    console.log('add to cart');
  };

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
        <S.Buy onClick={onBuyButtonClick}>
          <Button>
            <S.BuyIcon />${price.toFixed(2)}
          </Button>
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

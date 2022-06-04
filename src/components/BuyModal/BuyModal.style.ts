import styled from 'styled-components';

import ThemeColors from 'shared/styles/theme';

const BuyModal = styled.div``;

const Modal = styled.div`
  width: 80%;
  height: 80%;
  background-color: ${ThemeColors.mainColor};
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 40px;
  display: grid;
  grid-template-columns: 200px 1fr;
  column-gap: 20px;
`;

const Beat = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ThumbnailContainer = styled.div`
  position: relative;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PlayButton = styled.div`
  position: absolute;
  width: 40px;
  height: 40px;
`;

const Thumbnail = styled.div`
  width: 180px;
  height: 180px;
  margin-bottom: 10px;
`;

const Title = styled.h2`
  font-size: 18px;
  text-align: center;
`;

const Musician = styled.h3`
  text-align: center;
  font-weight: normal;
  opacity: 0.5;
`;

const Licenses = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(5, 1fr);
  row-gap: 20px;
  overflow: auto;
  height: 100%;
`;

export {
  BuyModal,
  Modal,
  Content,
  Beat,
  Thumbnail,
  Title,
  Musician,
  ThumbnailContainer,
  PlayButton,
  Licenses,
};

import styled from 'styled-components';

const DownloadModal = styled.div``;

const Title = styled.h2`
  text-align: start;
  font-size: 24px;
  font-weight: 600;
  white-space: nowrap;
  overflow: hidden;
`;

const Background = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 0;
`;

const Content = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  padding: 20px;
`;

export { Title, Background, Content, DownloadModal };

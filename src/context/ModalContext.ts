import React, { useState } from 'react';

const [isDownloadOpen, setIsDownloadOpen] = useState(false);
const [isShareOpen, setIsShareOpen] = useState(false);
const [isLicenseOpen, setIsLicenseOpen] = useState(false);

const ModalState = {
  isDownloadOpen,
  setIsDownloadOpen,
  isShareOpen,
  setIsShareOpen,
  isLicenseOpen,
  setIsLicenseOpen,
};

const ModalContext = React.createContext(ModalState);

export { ModalState };
export default ModalContext;

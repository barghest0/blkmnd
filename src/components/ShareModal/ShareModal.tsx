import { FC, SyntheticEvent, useState } from 'react';
import { Tab, Tabs } from '@mui/material';
import FileCopyOutlinedIcon from '@mui/icons-material/FileCopyOutlined';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import Modal from 'components/Modal/Modal';
import Preloader from 'components/Preloader/Preloader';
import ModalContainer from 'components/ModalContainer/ModalContainer';
import { ModalsTypes } from 'reduxStore/modals/types';
import * as modalsSelectors from 'reduxStore/modals/selectors';
import useTypedSelector from 'hooks/redux/useTypedDispatch';

import * as S from './ShareModal.style';
import { EMBED_TAB_STATE, SHARE_TAB_STATE } from './constants';

const ShareModal: FC = () => {
  const { shareModalVisability } = useTypedSelector(
    modalsSelectors.modalsVisabilities,
  );
  const { modalBeat } = useTypedSelector(modalsSelectors.modalDetails);
  const [tab, setTab] = useState(SHARE_TAB_STATE);
  const [copiedState, setCopiedState] = useState({
    value: '',
    isCopied: false,
  });

  const url = `http://localhost:8080/beats/${modalBeat?.id}`;

  const onCopyToClipboard = () => {
    setCopiedState({ value: url, isCopied: true });
  };

  const onTabChange = (_: SyntheticEvent, nextTab: string) => {
    setTab(nextTab);
  };

  const onCopyClick = () => {
    if (copiedState.isCopied) {
      setCopiedState({ value: '', isCopied: false });
    }
  };

  return (
    <S.ShareModal>
      <ModalContainer
        isOpen={shareModalVisability}
        modalType={ModalsTypes.share}
      >
        <S.Modal>
          {!modalBeat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={shareModalVisability}
              title={`Share: ${modalBeat.title}`}
              modalType={ModalsTypes.share}
            >
              <S.Content>
                <S.Tabs>
                  <Tabs
                    value={tab}
                    onChange={onTabChange}
                    indicatorColor="secondary"
                  >
                    <Tab value={SHARE_TAB_STATE} label="SHARE URL" />
                    <Tab value={EMBED_TAB_STATE} label="EMBED" />
                  </Tabs>
                </S.Tabs>
                <S.TabsContent>
                  <S.TabPanel hidden={tab !== SHARE_TAB_STATE}>
                    <S.UrlField>
                      <S.Field
                        name="url"
                        type="string"
                        variant="outlined"
                        label="URL"
                        value={url}
                      />
                      <CopyToClipboard
                        text={copiedState.value}
                        onCopy={onCopyToClipboard}
                      >
                        <S.CopyUrl onClick={onCopyClick}>
                          {copiedState.isCopied ? (
                            <DoneOutlinedIcon fontSize="small" />
                          ) : (
                            <FileCopyOutlinedIcon fontSize="small" />
                          )}
                        </S.CopyUrl>
                      </CopyToClipboard>
                    </S.UrlField>
                  </S.TabPanel>
                  <S.TabPanel hidden={tab !== EMBED_TAB_STATE}>
                    iframe
                  </S.TabPanel>
                </S.TabsContent>
              </S.Content>
            </Modal>
          )}
        </S.Modal>
      </ModalContainer>
    </S.ShareModal>
  );
};

export default ShareModal;

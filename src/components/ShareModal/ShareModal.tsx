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
import * as beatsSelectors from 'reduxStore/beats/selectors';
import useTypedSelector from 'hooks/redux/useTypedDispatch';

import * as S from './ShareModal.style';

const ShareModal: FC = () => {
  const { shareModalVisability } = useTypedSelector(
    modalsSelectors.visabilities,
  );
  const { beat } = useTypedSelector(beatsSelectors.separatedBeats);
  const [tab, setTab] = useState('share');
  const [copiedState, setCopiedState] = useState({
    value: '',
    isCopied: false,
  });

  const url = `http://localhost:8080/beats/${beat?.id}`;

  const onCopyToClipboard = () => {
    setCopiedState({ value: url, isCopied: true });
  };

  const onTabChange = (_: SyntheticEvent, tab: string) => {
    setTab(tab);
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
          {!beat ? (
            <Preloader />
          ) : (
            <Modal
              isOpen={shareModalVisability}
              title={`Share: ${beat.title}`}
              modalType={ModalsTypes.share}
            >
              <S.Content>
                <S.Tabs>
                  <Tabs
                    value={tab}
                    onChange={onTabChange}
                    indicatorColor="secondary"
                  >
                    <Tab value="share" label="SHARE URL" />
                    <Tab value="embed" label="EMBED" />
                  </Tabs>
                </S.Tabs>
                <S.TabsContent>
                  <S.TabPanel hidden={tab !== 'share'}>
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
                  <S.TabPanel hidden={tab !== 'embed'}>iframe</S.TabPanel>
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
